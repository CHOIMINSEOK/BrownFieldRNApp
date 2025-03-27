import { GridItem } from './grid-model';

export const mockGridItems: GridItem[] = [
  // Type A Items
  {
    type: "A",
    id: "A1",
    name: "Women's Fashion",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A2",
    name: "Men's Fashion",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A3",
    name: "Kids Fashion",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A4",
    name: "Sportswear",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A5",
    name: "Accessories",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A6",
    name: "Shoes",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A7",
    name: "Bags",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A8",
    name: "Jewelry",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A9",
    name: "Watches",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A10",
    name: "Underwear",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A11",
    name: "Outdoor",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A12",
    name: "Swimwear",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A13",
    name: "Homewear",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A14",
    name: "Trendy",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A15",
    name: "Vintage",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A16",
    name: "Uniform",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },

  // Type B Items
  {
    type: "B",
    id: "B1",
    name: "Smartphones",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B1-1",
        name: "iPhone",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: undefined
      },
      {
        type: "B",
        id: "B1-2",
        name: "Galaxy",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: undefined
      },
      {
        type: "B",
        id: "B1-3",
        name: "Pixel",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: undefined
      },
      {
        type: "B",
        id: "B1-4",
        name: "Xiaomi",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: undefined
      },
      {
        type: "B",
        id: "B1-5",
        name: "OnePlus",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: undefined
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B2",
    name: "Laptops",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B2-1",
        name: "MacBook",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B2",
          name: "Laptops",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B2-2",
        name: "LG Gram",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B2",
          name: "Laptops",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B2-3",
        name: "Galaxy Book",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B2",
          name: "Laptops",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B2-4",
        name: "Lenovo",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B2",
          name: "Laptops",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B2-5",
        name: "Dell",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
    id: "B2",
    name: "Laptops",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    parent: undefined,
    children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B3",
    name: "Tablets",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B3-1",
        name: "iPad",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B3",
          name: "Tablets",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B3-2",
        name: "Galaxy Tab",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B3",
          name: "Tablets",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B3-3",
        name: "Surface",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B3",
          name: "Tablets",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B3-4",
        name: "Huawei",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B3",
          name: "Tablets",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B3-5",
        name: "Lenovo Tab",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B3",
          name: "Tablets",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B4",
    name: "Smartwatches",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B4-1",
        name: "Apple Watch",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B4",
          name: "Smartwatches",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B4-2",
        name: "Galaxy Watch",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B4",
          name: "Smartwatches",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B4-3",
        name: "Garmin",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B4",
          name: "Smartwatches",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B4-4",
        name: "Fitbit",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B4",
          name: "Smartwatches",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B4-5",
        name: "Mi Band",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B4",
          name: "Smartwatches",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B5",
    name: "Earphones/Headphones",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B5-1",
        name: "AirPods",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B5",
          name: "Earphones/Headphones",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B5-2",
        name: "Galaxy Buds",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B5",
          name: "Earphones/Headphones",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B5-3",
        name: "Sony",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B5",
          name: "Earphones/Headphones",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B5-4",
        name: "Bose",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B5",
          name: "Earphones/Headphones",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B5-5",
        name: "Sennheiser",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
          parent: {
          type: "B",
          id: "B5",
          name: "Earphones/Headphones",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B6",
    name: "Speakers",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B6-1",
        name: "HomePod",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B6",
          name: "Speakers",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B6-2",
        name: "JBL",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B6",
          name: "Speakers",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B6-3",
        name: "Marshall",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B6",
          name: "Speakers",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B6-4",
        name: "Bose",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B6",
          name: "Speakers",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B6-5",
        name: "Sonos",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B6",
          name: "Speakers",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B7",
    name: "Cameras",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B7-1",
        name: "Canon",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B7",
          name: "Cameras",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B7-2",
        name: "Nikon",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B7",
          name: "Cameras",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B7-3",
        name: "Sony",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B7",
          name: "Cameras",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B7-4",
        name: "Fujifilm",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B7",
          name: "Cameras",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B7-5",
        name: "GoPro",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B7",
          name: "Cameras",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B8",
    name: "Printers",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B8-1",
        name: "HP",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B8",
          name: "Printers",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B8-2",
        name: "Epson",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B8",
          name: "Printers",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B8-3",
        name: "Canon",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B8",
          name: "Printers",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B8-4",
        name: "Brother",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B8",
          name: "Printers",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B8-5",
        name: "Samsung",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B8",
          name: "Printers",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B9",
    name: "Monitors",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B9-1",
        name: "LG",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B9",
          name: "Monitors",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B9-2",
        name: "Samsung",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B9",
          name: "Monitors",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B9-3",
        name: "Dell",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B9",
          name: "Monitors",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B9-4",
        name: "BenQ",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B9",
          name: "Monitors",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B9-5",
        name: "Acer",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B9",
          name: "Monitors",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B10",
    name: "Keyboards",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B10-1",
        name: "Logitech",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B10",
          name: "Keyboards",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B10-2",
        name: "Leopold",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B10",
          name: "Keyboards",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B10-3",
        name: "ABKO",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B10",
          name: "Keyboards",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B10-4",
        name: "Keychron",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B10",
          name: "Keyboards",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B10-5",
        name: "Ducky",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B10",
          name: "Keyboards",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B11",
    name: "Mice",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B11-1",
        name: "Logitech",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B11",
          name: "Mice",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B11-2",
        name: "Razer",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B11",
          name: "Mice",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B11-3",
        name: "Magic Mouse",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B11",
          name: "Mice",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B11-4",
        name: "Xenics",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B11",
          name: "Mice",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B11-5",
        name: "Microsoft",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B11",
          name: "Mice",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B12",
    name: "Routers",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B12-1",
        name: "ipTIME",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B12",
          name: "Routers",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B12-2",
        name: "Netgear",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B12",
          name: "Routers",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B12-3",
        name: "TP-Link",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B12",
          name: "Routers",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B12-4",
        name: "Linksys",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B12",
          name: "Routers",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B12-5",
        name: "ASUS",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B12",
          name: "Routers",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B13",
    name: "External Storage",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B13-1",
        name: "Samsung",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B13",
          name: "External Storage",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B13-2",
        name: "WD",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B13",
          name: "External Storage",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B13-3",
        name: "Seagate",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B13",
          name: "External Storage",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B13-4",
        name: "SanDisk",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B13",
          name: "External Storage",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B13-5",
        name: "Toshiba",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B13",
          name: "External Storage",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B14",
    name: "Chargers",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B14-1",
        name: "Apple",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B14",
          name: "Chargers",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B14-2",
        name: "Samsung",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B14",
          name: "Chargers",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B14-3",
        name: "Anker",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B14",
          name: "Chargers",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B14-4",
        name: "Belkin",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B14",
          name: "Chargers",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B14-5",
        name: "Baseus",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B14",
          name: "Chargers",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B15",
    name: "Smart Home Devices",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B15-1",
        name: "Google Home",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B15",
          name: "Smart Home Devices",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B15-2",
        name: "Alexa",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B15",
          name: "Smart Home Devices",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B15-3",
        name: "Philips Hue",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B15",
          name: "Smart Home Devices",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B15-4",
        name: "Ring",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B15",
          name: "Smart Home Devices",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B15-5",
        name: "Nest",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B15",
          name: "Smart Home Devices",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B16",
    name: "Gaming Gear",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B16-1",
        name: "Razer",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B16",
          name: "Gaming Gear",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B16-2",
        name: "Logitech G",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B16",
          name: "Gaming Gear",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B16-3",
        name: "SteelSeries",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B16",
          name: "Gaming Gear",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B16-4",
        name: "Cox",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B16",
          name: "Gaming Gear",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B16-5",
        name: "Corsair",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B16",
          name: "Gaming Gear",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
   // 추가되는 Type B Items
   {
    type: "B",
    id: "B17",
    name: "TV",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B17-1",
        name: "삼성 TV",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B17",
          name: "TV",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B17-2",
        name: "LG TV",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B17",
          name: "TV",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B17-3",
        name: "Sony TV",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B17",
          name: "TV",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B17-4",
        name: "TCL TV",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B17",
          name: "TV",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B18",
    name: "냉장고",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B18-1",
        name: "삼성 냉장고",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B18",
          name: "냉장고",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B18-2",
        name: "LG 냉장고",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B18",
          name: "냉장고",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B18-3",
        name: "위니아 냉장고",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B18",
          name: "냉장고",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B18-4",
        name: "하이얼 냉장고",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B18",
          name: "냉장고",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B19",
    name: "세탁기",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B19-1",
        name: "삼성 세탁기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B19",
          name: "세탁기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B19-2",
        name: "LG 세탁기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B19",
          name: "세탁기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B19-3",
        name: "위니아 세탁기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B19",
          name: "세탁기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B19-4",
        name: "대우 세탁기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B19",
          name: "세탁기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B20",
    name: "에어컨",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B20-1",
        name: "삼성 에어컨",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B20",
          name: "에어컨",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B20-2",
        name: "LG 에어컨",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B20",
          name: "에어컨",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B20-3",
        name: "캐리어 에어컨",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B20",
          name: "에어컨",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B20-4",
        name: "위니아 에어컨",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B20",
          name: "에어컨",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B21",
    name: "청소기",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B21-1",
        name: "다이슨 청소기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B21",
          name: "청소기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B21-2",
        name: "삼성 청소기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B21",
          name: "청소기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B21-3",
        name: "LG 청소기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B21",
          name: "청소기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B21-4",
        name: "샤오미 청소기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B21",
          name: "청소기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B22",
    name: "전자레인지",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B22-1",
        name: "삼성 전자레인지",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B22",
          name: "전자레인지",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B22-2",
        name: "LG 전자레인지",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B22",
          name: "전자레인지",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B22-3",
        name: "대우 전자레인지",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B22",
          name: "전자레인지",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B22-4",
        name: "쿠쿠 전자레인지",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B22",
          name: "전자레인지",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B23",
    name: "공기청정기",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B23-1",
        name: "삼성 공기청정기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B23",
          name: "공기청정기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B23-2",
        name: "LG 공기청정기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B23",
          name: "공기청정기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B23-3",
        name: "다이슨 공기청정기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B23",
          name: "공기청정기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B23-4",
        name: "위닉스 공기청정기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B23",
          name: "공기청정기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B24",
    name: "제습기",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B24-1",
        name: "LG 제습기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B24",
          name: "제습기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B24-2",
        name: "삼성 제습기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B24",
          name: "제습기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B24-3",
        name: "위니아 제습기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B24",
          name: "제습기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B24-4",
        name: "샤오미 제습기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B24",
          name: "제습기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B25",
    name: "가습기",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B25-1",
        name: "듀플렉스 가습기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B25",
          name: "가습기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B25-2",
        name: "샤오미 가습기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B25",
          name: "가습기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B25-3",
        name: "LG 가습기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B25",
          name: "가습기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B25-4",
        name: "발뮤다 가습기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B25",
          name: "가습기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B26",
    name: "커피머신",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B26-1",
        name: "네스프레소",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B26",
          name: "커피머신",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B26-2",
        name: "드롱기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B26",
          name: "커피머신",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B26-3",
        name: "필립스",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B26",
          name: "커피머신",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B26-4",
        name: "브레빌",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B26",
          name: "커피머신",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },

  {
    type: "B",
    id: "B27",
    name: "식기세척기",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B27-1",
        name: "삼성 식기세척기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B27",
          name: "식기세척기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B27-2",
        name: "LG 식기세척기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B27",
          name: "식기세척기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B27-3",
        name: "SK매직 식기세척기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B27",
          name: "식기세척기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B27-4",
        name: "보쉬 식기세척기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B27",
          name: "식기세척기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B28",
    name: "정수기",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B28-1",
        name: "코웨이 정수기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B28",
          name: "정수기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B28-2",
        name: "SK매직 정수기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B28",
          name: "정수기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B28-3",
        name: "웰스 정수기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B28",
          name: "정수기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B28-4",
        name: "LG 정수기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B28",
          name: "정수기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B29",
    name: "오븐",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B29-1",
        name: "삼성 오븐",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B29",
          name: "오븐",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B29-2",
        name: "LG 오븐",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B29",
          name: "오븐",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B29-3",
        name: "딤채쿡 오븐",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B29",
          name: "오븐",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B29-4",
        name: "쿠쿠 오븐",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B29",
          name: "오븐",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B30",
    name: "믹서기",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B30-1",
        name: "필립스 믹서기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B30",
          name: "믹서기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B30-2",
        name: "테팔 믹서기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B30",
          name: "믹서기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B30-3",
        name: "브라운 믹서기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B30",
          name: "믹서기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B30-4",
        name: "쿠진아트 믹서기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B30",
          name: "믹서기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B31",
    name: "전기밥솥",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B31-1",
        name: "쿠쿠 전기밥솥",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B31",
          name: "전기밥솥",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B31-2",
        name: "쿠첸 전기밥솥",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B31",
          name: "전기밥솥",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B31-3",
        name: "파나소닉 전기밥솥",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B31",
          name: "전기밥솥",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B31-4",
        name: "타이거 전기밥솥",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B31",
          name: "전기밥솥",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B32",
    name: "건조기",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B32-1",
        name: "삼성 건조기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B32",
          name: "건조기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B32-2",
        name: "LG 건조기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B32",
          name: "건조기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B32-3",
        name: "위니아 건조기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B32",
          name: "건조기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B32-4",
        name: "대우 건조기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B32",
          name: "건조기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B33",
    name: "전기레인지",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B33-1",
        name: "삼성 전기레인지",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B33",
          name: "전기레인지",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B33-2",
        name: "LG 전기레인지",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B33",
          name: "전기레인지",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B33-3",
        name: "쿠첸 전기레인지",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B33",
          name: "전기레인지",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B33-4",
        name: "하이라이트 전기레인지",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B33",
          name: "전기레인지",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B34",
    name: "식품건조기",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B34-1",
        name: "리큅 식품건조기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B34",
          name: "식품건조기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B34-2",
        name: "키친아트 식품건조기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B34",
          name: "식품건조기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B34-3",
        name: "엑세스 식품건조기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B34",
          name: "식품건조기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B34-4",
        name: "신일 식품건조기",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B34",
          name: "식품건조기",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B35",
    name: "전기포트",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B35-1",
        name: "필립스 전기포트",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B35",
          name: "전기포트",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B35-2",
        name: "발뮤다 전기포트",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B35",
          name: "전기포트",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B35-3",
        name: "델롱기 전기포트",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B35",
          name: "전기포트",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B35-4",
        name: "테팔 전기포트",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B35",
          name: "전기포트",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B36",
    name: "전기그릴",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [
      {
        type: "B",
        id: "B36-1",
        name: "테팔 전기그릴",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B36",
          name: "전기그릴",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B36-2",
        name: "필립스 전기그릴",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B36",
          name: "전기그릴",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B36-3",
        name: "자이글 전기그릴",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B36",
          name: "전기그릴",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B36-4",
        name: "델키 전기그릴",
        imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
        children: [],
        parent: {
          type: "B",
          id: "B36",
          name: "전기그릴",
          imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },

  // Type C Items
  {
    type: "C",
    id: "C1",
    name: "Fruits",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C2",
    name: "Vegetables",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C3",
    name: "Meat",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C4",
    name: "Seafood",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C5",
    name: "Dairy Products",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C6",
    name: "Snacks",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C7",
    name: "Beverages",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C8",
    name: "Instant Food",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C9",
    name: "Seasonings",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C10",
    name: "Grains",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C11",
    name: "Bakery",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C12",
    name: "Frozen Food",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C13",
    name: "Side Dishes",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C14",
    name: "Kimchi",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C15",
    name: "Nuts",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C16",
    name: "Health Food",
    imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/link-3974533-3292858.png",
    children: [],
    parent: undefined
  },
];
