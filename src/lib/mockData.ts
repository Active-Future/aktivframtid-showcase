
// Define the purchase type
export type Purchase = {
  date: string;
  description: string;
  category?: string;
  amount: number;
};

// Define the user type with purchases
export type User = {
  id: string;
  name: string;
  personnummer: string;
  purchases: Purchase[];
};

// Map of keywords to categories
const categoryMap: { [key: string]: string } = {
  cups: "Sport Cup",
  membership: "Medlemskap",
  equipment: "Utrustning",
  sales: "Market Sales",
  account: "Team Account",
  training: "Training",
};

// Function to assign categories based on description
function assignCategory(description: string): string {
  const lowerDescription = description.toLowerCase();
  for (const keyword in categoryMap) {
    if (lowerDescription.includes(keyword)) {
      return categoryMap[keyword];
    }
  }
  return "Other"; // Default category if no match is found
}

// Category colors mapping
export const categoryColors: { [key: string]: string } = {
  "Sport Cup": "#a0b41c",    // Olive Green
  "Medlemskap": "#8B5CF6",   // Purple
  "Utrustning": "#F97316",   // Orange
  "Market Sales": "#0EA5E9", // Blue
  "Team Account": "#D946EF", // Pink
  "Training": "#10B981",     // Teal
  "Other": "#6B7280",        // Gray
};

// Mock user data with categories assigned
export const users: User[] = [
  {
    id: "1",
    name: "Emma Larsson",
    personnummer: "19850615-4383",
    purchases: [
      {
        date: "2023-12-01",
        description: "Medlemskap",
        category: assignCategory("Membership"),
        amount: 3500,
      },
      {
        date: "2023-12-10",
        description: "Utrustning",
        category: assignCategory("Equipment"),
        amount: 1200,
      },
    ],
  },
  {
    id: "2",
    name: "Lukas Nilsson",
    personnummer: "19920322-7851",
    purchases: [
      {
        date: "2023-11-10",
        description: "Sport Cup",
        category: assignCategory("Cups"),
        amount: 350,
      },
      {
        date: "2023-12-10",
        description: "Utrustning",
        category: assignCategory("Equipment"),
        amount: 1200,
      },

    ],
  },
  {
    id: "3",
    name: "Sofia Bergström",
    personnummer: "19871208-9167",
    purchases: [
      {
        date: "2023-11-10",
        description: "Sport Cup",
        category: assignCategory("Cups"),
        amount: 350,
      },
      {
        date: "2023-12-10",
        description: "Utrustning",
        category: assignCategory("Equipment"),
        amount: 1200,
      },
    ],
  },
  {
    id: "4",
    name: "Anders Johansson",
    personnummer: "19790831-4436",
    purchases: [
      {
        date: "2023-11-10",
        description: "Sport Cup",
        category: assignCategory("Cups"),
        amount: 350,
      },
      {
        date: "2023-12-10",
        description: "Utrustning",
        category: assignCategory("Equipment"),
        amount: 1200,
      },
    ],
  },
  {
    id: "5",
    name: "Maja Lindholm",
    personnummer: "19910423-3982",
    purchases: [
      {
        date: "2023-11-10",
        description: "Sport Cup",
        category: assignCategory("Cups"),
        amount: 350,
      },
      {
        date: "2023-12-10",
        description: "Utrustning",
        category: assignCategory("Equipment"),
        amount: 1200,
      },
    ],
  },
  {
    id: "6",
    name: "Erik Sundberg",
    personnummer: "20010223-3182",
    purchases: [
      {
        date: "2023-11-10",
        description: "Sport Cup",
        category: assignCategory("Cups"),
        amount: 350,
      },
      {
        date: "2023-12-10",
        description: "Utrustning",
        category: assignCategory("Equipment"),
        amount: 1200,
      },
    ],
  },
  {
    id: "7",
    name: "Hanna Ekström",
    personnummer: "20211221-9282",
    purchases: [
      {
        date: "2023-11-10",
        description: "Sport Cup",
        category: assignCategory("Cups"),
        amount: 350,
      },
      {
        date: "2023-12-10",
        description: "Utrustning",
        category: assignCategory("Equipment"),
        amount: 1200,
      },
      {
        date: "2023-12-10",
        description: "Sport Cup",
        category: assignCategory("Cups"),
        amount: 3350,
      },
      {
        date: "2023-12-10",
        description: "Utrustning",
        category: assignCategory("Equipment"),
        amount: 200,
      },
    ],
  },
];
