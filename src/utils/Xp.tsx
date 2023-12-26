export const NivelGenerate = (xp: number): number =>
  Math.floor(xp || 0 / 1000) + 1;
