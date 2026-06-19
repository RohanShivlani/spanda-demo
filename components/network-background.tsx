"use client";

import { useEffect, useRef } from "react";

const DOT_COUNT = 90;
const CONNECTION_DISTANCE = 140;
const DOT_RADIUS = 2.5;
const SEED = 42;

type Point = { x: number; y: number };

function createSeededRandom(seed: number) {
  let state = seed;

  return () => {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateNormalizedPoints(count: number): Point[] {
  const random = createSeededRandom(SEED);

  return Array.from({ length: count }, () => ({
    x: random(),
    y: random(),
  }));
}

const normalizedPoints = generateNormalizedPoints(DOT_COUNT);

function drawNetwork(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
) {
  const points = normalizedPoints.map((point) => ({
    x: point.x * width,
    y: point.y * height,
  }));

  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dx = points[i].x - points[j].x;
      const dy = points[i].y - points[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < CONNECTION_DISTANCE) {
        const opacity = (1 - distance / CONNECTION_DISTANCE) * 0.4;
        ctx.strokeStyle = `rgba(251, 191, 36, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[j].x, points[j].y);
        ctx.stroke();
      }
    }
  }

  for (const point of points) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, DOT_RADIUS + 1.5, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(251, 191, 36, 0.25)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(point.x, point.y, DOT_RADIUS, 0, Math.PI * 2);
    ctx.fillStyle = "#FBBF24";
    ctx.fill();
  }
}

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const render = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawNetwork(ctx, width, height);
    };

    render();
    window.addEventListener("resize", render);

    return () => window.removeEventListener("resize", render);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    />
  );
}
