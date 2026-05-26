"use client";

import { useEffect, useRef } from "react";

type Point3D = { x: number; y: number; z: number };

function cubicBezier(
  p0: [number, number],
  p1: [number, number],
  p2: [number, number],
  p3: [number, number],
  t: number
): [number, number] {
  const mt = 1 - t;
  const x =
    mt ** 3 * p0[0] +
    3 * mt ** 2 * t * p1[0] +
    3 * mt * t ** 2 * p2[0] +
    t ** 3 * p3[0];
  const y =
    mt ** 3 * p0[1] +
    3 * mt ** 2 * t * p1[1] +
    3 * mt * t ** 2 * p2[1] +
    t ** 3 * p3[1];
  return [x, y];
}

function sampleCurve(
  p0: [number, number],
  p1: [number, number],
  p2: [number, number],
  p3: [number, number],
  steps: number
): Array<[number, number]> {
  const pts: Array<[number, number]> = [];
  for (let i = 0; i <= steps; i++) {
    pts.push(cubicBezier(p0, p1, p2, p3, i / steps));
  }
  return pts;
}

function addExtrudedPoints(
  points: Point3D[],
  path: Array<[number, number]>,
  thickness: number,
  depth: number
) {
  const depthSteps = Math.max(2, Math.ceil(depth / 0.025));
  const lateralSteps = Math.max(2, Math.ceil(thickness / 0.02));

  for (const [px, py] of path) {
    for (let li = 0; li < lateralSteps; li++) {
      const dx =
        -thickness / 2 + (li / (lateralSteps - 1)) * thickness;
      for (let di = 0; di < depthSteps; di++) {
        const dz =
          -depth / 2 + (di / (depthSteps - 1)) * depth;
        points.push({ x: px + dx, y: py, z: dz });
      }
    }
  }
}

function generateDollarPoints(): Point3D[] {
  const points: Point3D[] = [];

  const bar: Array<[number, number]> = [];
  for (let y = -0.88; y <= 0.88; y += 0.03) {
    bar.push([0, y]);
  }
  addExtrudedPoints(points, bar, 0.08, 0.12);

  const topS = sampleCurve(
    [0.02, 0.05],
    [0.55, 0.15],
    [-0.55, 0.55],
    [0, 0.92],
    48
  );
  addExtrudedPoints(points, topS, 0.07, 0.1);

  const bottomS = sampleCurve(
    [0, -0.92],
    [0.55, -0.55],
    [-0.55, -0.15],
    [0.02, -0.05],
    48
  );
  addExtrudedPoints(points, bottomS, 0.07, 0.1);

  return points;
}

export function AnimatedDollar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars = "░▒▓█▀▄▌▐│─┤├┴┬╭╮╰╯";
    const basePoints = generateDollarPoints();
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const radius = Math.min(rect.width, rect.height) * 0.525;

      ctx.font = "12px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const rotY = time * 0.3;
      const rotX = time * 0.2;
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const points: { x: number; y: number; z: number; char: string }[] = [];

      for (const { x, y, z } of basePoints) {
        const rx = x * cosY - z * sinY;
        const rz = x * sinY + z * cosY;
        const ry = y * cosX - rz * sinX;
        const finalZ = y * sinX + rz * cosX;

        const depth = (finalZ + 1) / 2;
        const charIndex = Math.floor(depth * (chars.length - 1));

        points.push({
          x: centerX + rx * radius,
          y: centerY + ry * radius,
          z: finalZ,
          char: chars[charIndex],
        });
      }

      points.sort((a, b) => a.z - b.z);

      points.forEach((point) => {
        const alpha = 0.2 + (point.z + 1) * 0.4;
        ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
        ctx.fillText(point.char, point.x, point.y);
      });

      time += 0.02;
      frameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
}
