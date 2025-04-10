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
  cups: "Cups",
  membership: "Memberships",
  equipment: "Equipment",
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

// Mock user data with categories assigned
export const users: User[] = [
  {
    id: "1",
    name: "Emma Larsson",
    personnummer: "19850615-4383",
    purchases: [
      {
        date: "2023-12-01",
        description: "Memberships",
        category: assignCategory("Memberships"),
        amount: 3500,
      },
      {
        date: "2023-12-10",
        description: "Equipment",
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
        description: "Cups",
        category: assignCategory("Cups"),
        amount: 350,
      },
      {
        date: "2023-12-15",
        description: "UX Conference Membership",
        category: assignCategory("UX Conference Membership"),
        amount: 2100,
      },
    ],
  },
  {
    id: "3",
    name: "Sofia Bergström",
    personnummer: "19871208-9167",
    purchases: [
      {
        date: "2023-12-12",
        description: "Marketing Week Items",
        category: assignCategory("Marketing Week Items"),
        amount: 1850,
      },
      {
        date: "2023-11-08",
        description: "Industry Network Membership",
        category: assignCategory("Industry Network Membership"),
        amount: 1500,
      },
    ],
  },
  {
    id: "4",
    name: "Anders Johansson",
    personnummer: "19790831-4436",
    purchases: [
      {
        date: "2023-11-22",
        description: "Presentation Equipment",
        category: assignCategory("Presentation Equipment"),
        amount: 1850,
      },
      {
        date: "2023-12-18",
        description: "Client Meeting Items",
        category: assignCategory("Client Meeting Items"),
        amount: 2200,
      },
      {
        date: "2023-11-12",
        description: "Sales Conference Membership",
        category: assignCategory("Sales Conference Membership"),
        amount: 2300,
      },
    ],
  },
  {
    id: "5",
    name: "Maja Lindholm",
    personnummer: "19910423-3982",
    purchases: [
      {
        date: "2023-11-28",
        description: "Testing Equipment",
        category: assignCategory("Testing Equipment"),
        amount: 3850,
      },
      {
        date: "2023-12-16",
        description: "Product Launch Merchandise",
        category: assignCategory("Product Launch Merchandise"),
        amount: 3200,
      },
      {
        date: "2023-11-17",
        description: "Coffee Cups for Product Team",
        category: assignCategory("Coffee Cups for Product Team"),
        amount: 380,
      },
    ],
  },
  {
    id: "6",
    name: "Erik Sundberg",
    personnummer: "20010223-3182",
    purchases: [
      {
        date: "2023-11-30",
        description: "Office Equipment",
        category: assignCategory("Office Equipment"),
        amount: 1650,
      },
      {
        date: "2023-12-20",
        description: "Finance Cups",
        category: assignCategory("Finance Cups"),
        amount: 420,
      },
      {
        date: "2023-11-19",
        description: "Financial Analyst Membership",
        category: assignCategory("Financial Analyst Membership"),
        amount: 1750,
      },
    ],
  },
  {
    id: "7",
    name: "Hanna Ekström",
    personnummer: "20211221-9282",
    purchases: [
      {
        date: "2023-12-13",
        description: "HR Management System",
        category: assignCategory("HR Management System"),
        amount: 2350,
      },
      {
        date: "2023-12-02",
        description: "Training Equipment",
        category: assignCategory("Training Equipment"),
        amount: 1950,
      },
      {
        date: "2023-11-24",
        description: "Recruitment Items",
        category: assignCategory("Recruitment Items"),
        amount: 1400,
      },
      {
        date: "2023-12-08",
        description: "HR Professional Membership",
        category: assignCategory("HR Professional Membership"),
        amount: 1600,
      },
    ],
  },
];
