/**
 * Calculates password strength and returns rating, active bar count, and label.
 * Segment states:
 * 0: Not entered (4 gray bars)
 * 1: Weak (1 colored bar)
 * 2: Fair (2 colored bars)
 * 3: Good (3 colored bars)
 * 4: Strong (4 colored bars)
 */
export function getPasswordStrength(password) {
  if (!password || password.trim().length === 0) {
    return {
      score: 0,
      label: "Not entered",
      barsFilled: 0,
      colorClass: "bg-[#D8D7D4]",
    };
  }

  let score = 0;

  if (password.length >= 8) score += 1;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[^a-zA-Z0-9]/.test(password)) score += 1;

  if (password.length < 8 && score > 1) {
    score = 1;
  }

  switch (score) {
    case 1:
      return {
        score: 1,
        label: "Weak",
        barsFilled: 1,
        colorClass: "bg-[#D97706]", // warm amber
      };
    case 2:
      return {
        score: 2,
        label: "Fair",
        barsFilled: 2,
        colorClass: "bg-[#B78E5B]", // gold/sand
      };
    case 3:
      return {
        score: 3,
        label: "Good",
        barsFilled: 3,
        colorClass: "bg-[#2D6A4F]", // medium forest
      };
    case 4:
      return {
        score: 4,
        label: "Strong",
        barsFilled: 4,
        colorClass: "bg-[#164C3B]", // signature deep green
      };
    default:
      return {
        score: 1,
        label: "Weak",
        barsFilled: 1,
        colorClass: "bg-[#D97706]",
      };
  }
}

