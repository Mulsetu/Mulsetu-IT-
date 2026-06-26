"use client";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useRouter } from "next/navigation";
import { useScroll, useSpring, useTransform, useMotionValueEvent, motion, MotionValue } from "framer-motion";
import { Bot, Globe, Cloud, Code, Smartphone, LineChart, Database } from "lucide-react";

const services = [
  {
    title: "AI & Automation",
    subtitle: "Automate the Work. Scale the Business.",
    desc: "We build AI agents, chatbots, and end-to-end automation systems that eliminate manual work, qualify leads, and handle customer operations — around the clock.",
    href: "/services/ai-automation",
    cta: "Get a Free Automation Audit",
    color: "#acedff",
    icon: Bot
  },
  {
    title: "Website Development",
    subtitle: "Websites That Work for You.",
    desc: "Not just a web presence — a conversion engine. We build performance-first websites that rank on Google, load in milliseconds, and turn visitors into clients.",
    href: "/services/website-development",
    cta: "Book Free Consultation",
    color: "#4cd7f6",
    icon: Globe
  },
  {
    title: "SaaS Development",
    subtitle: "Build Your SaaS. Own the Market.",
    desc: "We build production-grade SaaS platforms from scratch — multi-tenant architecture, subscription billing, analytics, and portals that scale with your business.",
    href: "/services/saas-development",
    cta: "Discuss Your SaaS Idea",
    color: "#06b6d4",
    icon: Cloud
  },
  {
    title: "Custom Software & ERP",
    subtitle: "Software That Fits Your Workflow.",
    desc: "ERP, billing, inventory, CRM, School ERP and HR systems built around how your business actually operates — not how a vendor thinks it should.",
    href: "/services/custom-software",
    cta: "Discuss Your Requirements",
    color: "#acedff",
    icon: Code
  },
  {
    title: "Mobile App Development",
    subtitle: "Apps Your Users Will Love to Use.",
    desc: "Android, iOS, and Flutter apps built for customers, employees and field teams — designed to be fast, reliable and genuinely useful.",
    href: "/services/mobile-apps",
    cta: "Discuss Your App Idea",
    color: "#4cd7f6",
    icon: Smartphone
  },
  {
    title: "Digital Growth & SEO",
    subtitle: "Grow Online. Generate Real Leads.",
    desc: "SEO, performance optimisation, analytics and lead generation — a complete digital growth system that compounds over time and delivers measurable results.",
    href: "/services/digital-growth",
    cta: "Get a Free SEO Audit",
    color: "#06b6d4",
    icon: LineChart
  },
  {
    title: "Data Scraping & Research",
    subtitle: "Turn Public Data Into Business Intelligence.",
    desc: "We collect and structure publicly available data — business directories, government portals, market pricing and competitor intelligence — fully legally, respecting robots.txt, rate limits and privacy law.",
    href: "/services/data-scraping",
    cta: "Discuss Your Data Needs",
    color: "#acedff",
    icon: Database
  },
];

const CentralSphere = ({ scrollProgress, total }: { scrollProgress: MotionValue<number>; total: number }) => {
  const ref = useRef<THREE.Mesh>(null!);
  const htmlRef = useRef<HTMLDivElement>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    }
    if (htmlRef.current) {
      const p = scrollProgress.get();
      const safeP = Math.min(p, 0.9999);
      const localP = (safeP * total) % 1;
      let opacity = 0;
      if (localP <= 0.05) opacity = 1;
      else if (localP <= 0.22) opacity = 1 - ((localP - 0.05) / 0.17);
      else if (localP <= 0.83) opacity = 0;
      else opacity = (localP - 0.83) / 0.17;
      htmlRef.current.style.opacity = opacity.toString();
    }
  });

  return (
    <group>
      <mesh ref={ref}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial color="#4cd7f6" transparent opacity={0.15} wireframe />
        <mesh>
          <sphereGeometry args={[1.1, 32, 32]} />
          <meshBasicMaterial color="#05080f" />
        </mesh>
      </mesh>
      <Html center zIndexRange={[20, 0]}>
        <div
          ref={htmlRef}
          className="pointer-events-none w-[240px] md:w-[320px] text-center"
          style={{ willChange: 'opacity' }}
        >
          <span className="text-sm md:text-lg font-display font-bold uppercase tracking-widest text-white leading-relaxed drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            Think of us as your<br />
            <span className="text-teal-bright drop-shadow-[0_0_15px_rgba(172,237,255,0.5)]">In-house team</span>
          </span>
        </div>
      </Html>
    </group>
  );
};

const easeInOut = (t: number) => t * t * (3 - 2 * t);
const mod = (a: number, n: number) => ((a % n) + n) % n;
const lerpAngle = (start: number, end: number, t: number) => {
  const delta = mod(end - start + Math.PI, Math.PI * 2) - Math.PI;
  return start + delta * t;
};

const OrbitingSphere = ({
  index, service, total, scrollProgress, isMobile, radius
}: {
  index: number;
  service: typeof services[0];
  total: number;
  scrollProgress: MotionValue<number>;
  isMobile: boolean;
  radius: number;
}) => {
  const groupRef = useRef<THREE.Group>(null!);
  const meshRef = useRef<THREE.Mesh>(null!);
  const desktopCardRef = useRef<HTMLDivElement>(null!);
  const iconHtmlRef = useRef<HTMLDivElement>(null!);
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  const baseAngle = (index / total) * Math.PI * 2;
  const Icon = service.icon;
  // defined before useFrame so the closure captures it correctly
  const isLeft = index % 2 === 0;

  const tiltX = [Math.PI / 4, -Math.PI / 5, Math.PI / 3, -Math.PI / 6, Math.PI / 5, -Math.PI / 4, Math.PI / 7][index];
  const tiltY = [Math.PI / 6, Math.PI / 3, -Math.PI / 4, Math.PI / 2, -Math.PI / 3, 0, -Math.PI / 8][index];
  const tiltZ = [0, Math.PI / 8, -Math.PI / 6, Math.PI / 4, Math.PI / 5, -Math.PI / 3, Math.PI / 3][index];

  const vec = useMemo(() => new THREE.Vector3(), []);
  const euler = useMemo(() => new THREE.Euler(), []);
  const smoothScaleRef = useRef(1);

  useFrame((state, delta) => {
    if (!groupRef.current || !meshRef.current) return;

    meshRef.current.rotation.y += delta;
    meshRef.current.rotation.x += delta * 0.5;

    const p = scrollProgress.get();
    const safeP = Math.min(p, 0.9999);
    const cycle = Math.floor(safeP * total);
    const localP = (safeP * total) % 1;

    let moveProgress = 0;
    let textOpacity = 0;

    if (cycle === index) {
      if (localP >= 0.05 && localP <= 0.22) {
        moveProgress = (localP - 0.05) / 0.17;
      } else if (localP > 0.22 && localP <= 0.83) {
        moveProgress = 1;
        if (localP >= 0.28 && localP <= 0.38) textOpacity = (localP - 0.28) / 0.10;
        else if (localP > 0.38 && localP <= 0.77) textOpacity = 1;
        else if (localP > 0.77 && localP <= 0.83) textOpacity = 1 - ((localP - 0.77) / 0.06);
      } else if (localP > 0.83 && localP <= 1.0) {
        moveProgress = 1 - ((localP - 0.83) / 0.17);
      }
    }

    const easedMove = easeInOut(moveProgress);
    const idleRotation = state.clock.getElapsedTime() * 0.2;
    const backgroundAngle = baseAngle + idleRotation;

    const currentR = THREE.MathUtils.lerp(radius, 3.5, easedMove);
    const currentAngle = moveProgress > 0 ? lerpAngle(backgroundAngle, Math.PI / 2, easedMove) : backgroundAngle;
    const currentTiltX = THREE.MathUtils.lerp(tiltX, 0, easedMove);
    const currentTiltY = THREE.MathUtils.lerp(tiltY, 0, easedMove);
    const currentTiltZ = THREE.MathUtils.lerp(tiltZ, 0, easedMove);

    vec.set(Math.cos(currentAngle) * currentR, 0, Math.sin(currentAngle) * currentR);
    euler.set(currentTiltX, currentTiltY, currentTiltZ, 'XYZ');
    vec.applyEuler(euler);
    groupRef.current.position.copy(vec);

    const targetScale = THREE.MathUtils.lerp(1, 2.5, easedMove);
    smoothScaleRef.current = THREE.MathUtils.lerp(smoothScaleRef.current, targetScale, Math.min(delta * 7, 1));
    groupRef.current.scale.setScalar(smoothScaleRef.current);

    // Desktop card positioning (not used on mobile)
    if (desktopCardRef.current && !isMobile) {
      desktopCardRef.current.style.opacity = textOpacity.toString();
      desktopCardRef.current.style.pointerEvents = textOpacity > 0.5 ? 'auto' : 'none';
      const xOffset = isLeft ? 'calc(-50% - 60px)' : 'calc(50% + 60px)';
      const yOffset = `${THREE.MathUtils.lerp(15, 0, textOpacity)}px`;
      desktopCardRef.current.style.transform = `translate3d(${xOffset}, ${yOffset}, 0)`;
    }

    if (iconHtmlRef.current) {
      iconHtmlRef.current.style.opacity = easedMove.toString();
      iconHtmlRef.current.style.transform = `translate3d(0, ${THREE.MathUtils.lerp(20, 0, easedMove)}px, 0)`;
    }
  });

  return (
    <>
      <group rotation={[tiltX, tiltY, tiltZ]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.006, 16, 100]} />
          <meshBasicMaterial color={service.color} transparent opacity={0.15} />
        </mesh>
      </group>

      <group ref={groupRef}>
        <mesh
          ref={meshRef}
          onClick={() => router.push(service.href)}
          onPointerOver={() => { setHovered(true); document.body.style.cursor = 'pointer'; }}
          onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto'; }}
        >
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial
            color="#4cd7f6"
            emissive="#4cd7f6"
            emissiveIntensity={hovered ? 0.5 : 0.1}
            roughness={0.2}
            metalness={0.8}
          />
          <Html center distanceFactor={12} zIndexRange={[50, 0]}>
            <div
              ref={iconHtmlRef}
              className="flex flex-col items-center justify-center pointer-events-none"
              style={{ opacity: 0, transform: 'translate3d(0, 20px, 0)', willChange: 'opacity, transform' }}
            >
              <Icon className="w-8 h-8 md:w-10 md:h-10 drop-shadow-lg" color="#05080f" strokeWidth={2} />
            </div>
          </Html>
        </mesh>

        {/* Desktop card — hidden on mobile, replaced by overlay outside canvas */}
        {!isMobile && (
          <Html position={[0, 0, 0]} center zIndexRange={[100, 0]}>
            <div
              ref={desktopCardRef}
              className={`w-[500px] glass-card p-8 rounded-2xl border-t border-l border-white/10 ${isLeft ? 'text-right' : 'text-left'}`}
              style={{
                opacity: 0,
                pointerEvents: 'none',
                background: 'rgba(8, 13, 26, 0.75)',
                backdropFilter: 'blur(16px)',
                willChange: 'opacity, transform',
              }}
            >
              <div className={`text-xs font-bold text-teal-bright uppercase tracking-widest mb-3 flex items-center gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                {isLeft && <span className="w-6 h-[1px] bg-teal/40" />}
                Service 0{index + 1}
                {!isLeft && <span className="w-6 h-[1px] bg-teal/40" />}
              </div>
              <h3 className="font-display font-bold text-3xl text-white mb-3">{service.title}</h3>
              <p className="text-base font-semibold text-teal-bright mb-4">{service.subtitle}</p>
              <p className="text-base text-muted leading-relaxed mb-8">{service.desc}</p>
              <button
                onClick={() => router.push(service.href)}
                className="text-base font-semibold text-white bg-teal/20 hover:bg-teal hover:text-deep border border-teal/30 px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                {service.cta} <span className="text-xl">→</span>
              </button>
            </div>
          </Html>
        )}
      </group>
    </>
  );
};

// Adjusts camera FOV reactively inside the Canvas
const CameraSetup = ({ isMobile }: { isMobile: boolean }) => {
  const { camera } = useThree();
  useEffect(() => {
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = isMobile ? 65 : 45;
      camera.updateProjectionMatrix();
    }
  }, [isMobile, camera]);
  return null;
};

const Scene = ({ scrollProgress, isMobile }: { scrollProgress: MotionValue<number>; isMobile: boolean }) => {
  // Smaller radius on mobile so orbiting spheres stay within the narrow portrait viewport
  const radius = isMobile ? 3.8 : 4.5;
  return (
    <>
      <CameraSetup isMobile={isMobile} />
      {/* Rotate entire scene 90° on mobile: horizontal orbits become vertical (portrait-friendly) */}
      <group rotation={isMobile ? [0, 0, Math.PI / 2] : [0, 0, 0]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[0, 0, 0]} intensity={2} color="#4cd7f6" />
        <CentralSphere scrollProgress={scrollProgress} total={services.length} />
        {services.map((service, index) => (
          <OrbitingSphere
            key={service.href}
            index={index}
            service={service}
            total={services.length}
            scrollProgress={scrollProgress}
            isMobile={isMobile}
            radius={radius}
          />
        ))}
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={500}
              array={new Float32Array(500 * 3).map(() => (Math.random() - 0.5) * 25)}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial size={0.02} color="#4cd7f6" transparent opacity={0.4} />
        </points>
      </group>
    </>
  );
};

export default function ServicesOrbit() {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const mobileCardRef = useRef<HTMLDivElement>(null);
  const prevIndexRef = useRef(0);
  // Ref keeps useMotionValueEvent closure in sync with latest isMobile value
  const isMobileRef = useRef(false);
  const router = useRouter();

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      isMobileRef.current = mobile;
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 30, restDelta: 0.001 });
  const introOpacity = useTransform(scrollYProgress, [0, 0.025], [1, 0]);

  // Drive mobile card content + opacity from scroll — no re-renders for opacity (direct DOM)
  useMotionValueEvent(smoothProgress, "change", (p) => {
    if (!isMobileRef.current) return;
    const total = services.length;
    const safeP = Math.min(p, 0.9999);
    const cycle = Math.min(Math.floor(safeP * total), total - 1);
    const localP = (safeP * total) % 1;

    if (cycle !== prevIndexRef.current) {
      prevIndexRef.current = cycle;
      setMobileActiveIndex(cycle);
    }

    let opacity = 0;
    if (localP >= 0.28 && localP <= 0.38) opacity = (localP - 0.28) / 0.10;
    else if (localP > 0.38 && localP <= 0.77) opacity = 1;
    else if (localP > 0.77 && localP <= 0.83) opacity = 1 - ((localP - 0.77) / 0.06);

    if (mobileCardRef.current) {
      mobileCardRef.current.style.opacity = opacity.toString();
      mobileCardRef.current.style.transform = `translateY(${(1 - opacity) * 14}px)`;
      mobileCardRef.current.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
    }
  });

  const activeService = services[mobileActiveIndex];
  const ActiveIcon = activeService.icon;

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: '700vh' }} id="services-orbit">
      {/* SEO fallback */}
      <div className="sr-only">
        <h2>Our Services</h2>
        <ul>
          {services.map(s => (
            <li key={s.href}>
              <h3>{s.title}</h3><p>{s.subtitle}</p><p>{s.desc}</p><a href={s.href}>{s.cta}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep via-transparent to-deep pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep to-transparent z-[10] pointer-events-none" />

        {/* Intro header */}
        <motion.div
          style={{ opacity: introOpacity }}
          className="absolute inset-x-0 top-0 z-20 flex flex-col items-center pt-16 md:pt-20 pointer-events-none"
        >
          <span className="section-tag mb-3 inline-flex shadow-xl shadow-[#4cd7f6]/10">Our Expertise</span>
          <h2 className="font-display font-bold text-2xl md:text-4xl mt-1 text-white/95 drop-shadow-2xl">
            Our Services
          </h2>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          style={{ opacity: introOpacity }}
          className="absolute inset-x-0 bottom-24 z-20 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-teal-bright/50">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-teal/40 to-transparent"
          />
        </motion.div>

        {/* Mobile card overlay — rendered outside Canvas so it's always screen-positioned */}
        {isMobile && (
          <div
            ref={mobileCardRef}
            className="absolute inset-x-3 bottom-16 z-30 rounded-2xl border border-white/10"
            style={{
              opacity: 0,
              pointerEvents: 'none',
              background: 'rgba(8, 13, 26, 0.90)',
              backdropFilter: 'blur(20px)',
              willChange: 'opacity, transform',
            }}
          >
            <div className="p-4 text-center">
              <div className="flex items-center justify-center gap-1.5 mb-3">
                <div className="w-7 h-7 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center">
                  <ActiveIcon size={14} className="text-teal-bright" />
                </div>
                <span className="text-xs font-bold text-teal-bright uppercase tracking-widest">
                  Service 0{mobileActiveIndex + 1}
                </span>
                <span className="text-teal/40 text-xs">/ {services.length}</span>
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-1 leading-tight">{activeService.title}</h3>
              <p className="text-xs font-semibold text-teal-bright mb-2">{activeService.subtitle}</p>
              <p className="text-xs text-muted leading-relaxed mb-3 line-clamp-3">{activeService.desc}</p>
              <button
                onClick={() => router.push(activeService.href)}
                className="text-xs font-semibold text-white bg-teal/20 active:bg-teal active:text-deep border border-teal/30 px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                {activeService.cta} →
              </button>
            </div>
          </div>
        )}

        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Scene scrollProgress={smoothProgress} isMobile={isMobile} />
        </Canvas>
      </div>
    </div>
  );
}
