"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef<boolean>(false);
  const animIdRef = useRef<number | null>(null);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let nt = 0;

    const resize = () => {
      const parent = container || canvas.parentElement;
      const clientW = parent?.clientWidth || window.innerWidth;
      const clientH = parent?.clientHeight || window.innerHeight;
      // Cap resolution for massive performance boost; CSS handles scaling and blur
      w = canvas.width = Math.min(clientW, 1280);
      h = canvas.height = Math.min(clientH, 600);
    };

    resize();

    const drawWave = (n: number) => {
      nt += getSpeed();
      const currentWaveWidth = waveWidth || 45;
      const colorLen = waveColors.length;

      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = currentWaveWidth;
        ctx.strokeStyle = waveColors[i % colorLen];

        // Step by 16px instead of 5px: with CSS blur, it looks identical but saves 70% math
        for (let x = 0; x < w; x += 16) {
          const y = noise(x / 600, 0.3 * i, nt) * 80;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    const render = () => {
      // Strictly avoid rendering when scrolled out of view
      if (!isVisibleRef.current) {
        animIdRef.current = null;
        return;
      }

      ctx.fillStyle = backgroundFill || "#091B33";
      ctx.globalAlpha = waveOpacity || 0.3;
      ctx.fillRect(0, 0, w, h);
      drawWave(4);

      animIdRef.current = requestAnimationFrame(render);
    };

    const startAnimation = () => {
      if (!animIdRef.current) {
        animIdRef.current = requestAnimationFrame(render);
      }
    };

    const stopAnimation = () => {
      if (animIdRef.current) {
        cancelAnimationFrame(animIdRef.current);
        animIdRef.current = null;
      }
    };

    // Only run animation when footer is actually on screen!
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      { threshold: 0.01 }
    );

    observer.observe(container);

    let resizeTimer: any;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      stopAnimation();
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, [backgroundFill, waveOpacity, waveWidth, speed, waveColors]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden w-full", containerClassName)}
    >
      <canvas
        className="absolute inset-0 z-0 w-full h-full pointer-events-none"
        ref={canvasRef}
        id="canvas"
        style={{
          filter: `blur(${blur}px)`,
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
        }}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
