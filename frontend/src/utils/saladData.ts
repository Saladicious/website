import { SaladProps } from "../components/SaladCard";

// Sample images from Unsplash
const saladImages = [
  "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80", // Mexican
  "https://images.unsplash.com/photo-1621886292650-320c11c4a958?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80", // Dates Quinoa
  "https://images.unsplash.com/photo-1519996409144-56c88a9bd465?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80", // Pumpkin
  "https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80", // Beans
  "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80"  // Chaaty
];

// Additional images for remaining menu items
const additionalImages = [
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1384&q=80",
  "https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1378&q=80",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
  "https://images.unsplash.com/photo-1640719028782-8230f1bdc53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
];

export const salads: SaladProps[] = [
  // The 5 signature salads as specified in SAL-3
  {
    id: "organic-mexican",
    name: "Organic Mexican Salad",
    description: "A vibrant mix of black beans, corn, avocado, and cherry tomatoes with a zesty lime-cilantro dressing. Packed with fiber and heart-healthy fats.",
    price: 310,
    image: saladImages[0],
    tags: ["Vegan", "High-Fiber", "Heart-Healthy"],
    isFeatured: true
  },
  {
    id: "organic-dates-quinoa",
    name: "Organic Dates Quinoa Salad",
    description: "Protein-rich quinoa with sweet dates, rocket leaves, toasted almonds, and pomegranate seeds. A perfect balance of protein and antioxidants.",
    price: 340,
    image: saladImages[1],
    tags: ["Vegetarian", "Protein-Rich", "Antioxidant"],
    isFeatured: true
  },
  {
    id: "organic-desi-pumpkin",
    name: "Organic Desi Pumpkin Peanut Salad",
    description: "Roasted pumpkin cubes with toasted peanuts, spinach, and crunchy sprouts, dressed in our signature tamarind vinaigrette. Rich in Vitamin A and minerals.",
    price: 290,
    image: saladImages[2],
    tags: ["Vegan", "Vitamin-Rich", "Immunity-Boosting"],
    isFeatured: true
  },
  {
    id: "organic-trio-beans",
    name: "Organic Trio Beans Salad",
    description: "A protein powerhouse featuring three types of beans, bell peppers, red onions, and cherry tomatoes with a cumin-lime dressing. Excellent source of plant protein and fiber.",
    price: 280,
    image: saladImages[3],
    tags: ["Vegan", "Protein-Rich", "High-Fiber"],
    isFeatured: false
  },
  {
    id: "organic-chaaty",
    name: "Organic Chaaty Salad",
    description: "Our twist on traditional chaat with fresh greens, sprouted moong, diced potatoes, and crispy sev, topped with sweet and tangy yogurt dressing. Probiotic-rich and digestion-friendly.",
    price: 270,
    image: saladImages[4],
    tags: ["Vegetarian", "Probiotic", "Digestion-Friendly"],
    isFeatured: false
  },
  
  // Additional salads to fill the menu
  {
    id: "masala-paneer",
    name: "Masala Paneer Power Bowl",
    description: "Grilled paneer with mixed greens, roasted vegetables, and our special masala dressing. High in calcium and protein.",
    price: 320,
    image: additionalImages[0],
    tags: ["Vegetarian", "Calcium-Rich", "Protein-Rich"],
    isFeatured: false
  },
  {
    id: "millet-superfood",
    name: "Millet Superfood Salad",
    description: "Ancient millet grains with kale, roasted vegetables, and seeds, dressed in a light herb vinaigrette. Excellent for gut health and digestion.",
    price: 300,
    image: additionalImages[1],
    tags: ["Vegan", "Gluten-Free", "Gut-Friendly"],
    isFeatured: false
  },
  {
    id: "coconut-kale",
    name: "Coconut Kale Green Bowl",
    description: "Fresh kale, coconut shavings, mango, and seeds with a ginger-lime dressing. Rich in vitamins and minerals for skin health.",
    price: 290,
    image: additionalImages[2],
    tags: ["Vegan", "Skin-Health", "Detoxifying"],
    isFeatured: false
  },
  {
    id: "tandoori-veggie",
    name: "Tandoori Veggie Protein Bowl",
    description: "Tandoori-spiced grilled vegetables with chickpeas, mixed greens, and a cooling mint raita. Perfect post-workout meal.",
    price: 310,
    image: additionalImages[3],
    tags: ["Vegetarian", "Post-Workout", "Protein-Rich"],
    isFeatured: false
  },
  {
    id: "spinach-strawberry",
    name: "Spinach Strawberry Sunshine",
    description: "Baby spinach with fresh strawberries, toasted almonds, and feta cheese, dressed in a balsamic vinaigrette. High in iron and vitamin C.",
    price: 320,
    image: additionalImages[4],
    tags: ["Vegetarian", "Iron-Rich", "Immunity-Boosting"],
    isFeatured: false
  },
  {
    id: "rajma-avocado",
    name: "Rajma Avocado Fresh Bowl",
    description: "Kidney beans, avocado slices, cherry tomatoes, and corn with a creamy coriander dressing. Heart-healthy and satisfying.",
    price: 310,
    image: additionalImages[0],
    tags: ["Vegan", "Heart-Healthy", "Filling"],
    isFeatured: false
  },
  {
    id: "watermelon-feta",
    name: "Watermelon Feta Refresh",
    description: "Juicy watermelon cubes with crumbled feta, mint leaves, and a light honey-lime dressing. Hydrating and mineral-rich.",
    price: 280,
    image: additionalImages[1],
    tags: ["Vegetarian", "Hydrating", "Summer-Special"],
    isFeatured: false
  }
];

export const getSignatureSalads = () => {
  // Gets the 5 signature salads (first 5 in the array)
  return salads.slice(0, 5);
};

export const getFeaturedSalads = () => {
  return salads.filter(salad => salad.isFeatured);
};

export const getAllSalads = () => {
  return salads;
};