import ghee1LImg from '@/components/Images/ghee1L.png';
import ghee500mlImg from '@/components/Images/ghee500ml.png';
import milk from '@/components/Images/milk.png'


export const PRODUCTS = [
    {
        id: 'ghee-1l',
        name: 'A2 Gir Cow Bilona Ghee',
        slug: 'a2-gir-cow-bilona-ghee',
        description: 'Traditional bilona method ghee from A2 Gir cows. Churned from curd, not cream. Rich in aroma and nutrients.',
        price: 1800,
        unit: '1 Litre',
        image: ghee1LImg,
        inStock: true,
    },
    {
        id: 'ghee-500ml',
        name: 'A2 Gir Cow Bilona Ghee',
        slug: 'a2-gir-cow-bilona-ghee-500ml',
        description: 'Traditional bilona method ghee from A2 Gir cows. Churned from curd, not cream. Rich in aroma and nutrients.',
        price: 950,
        unit: '500 ml',
        image: ghee500mlImg,
        inStock: true,
    },
    {
        id: 'milk-1l',
        name: 'Fresh A2 Gir Cow Milk',
        slug: 'fresh-a2-gir-cow-milk',
        description: 'Farm-fresh raw A2 milk from free-grazing Gir cows. Delivered daily.',
        price: 90,
        unit: '1 Litre',
        image: milk,
        inStock: true,
    },
    {
        id: 'milk-500ml',
        name: 'Fresh A2 Gir Cow Milk',
        slug: 'fresh-a2-gir-cow-milk-500ml',
        description: 'Farm-fresh raw A2 milk from free-grazing Gir cows. Delivered daily.',
        price: 45,
        unit: '500 ml',
        image: milk,
        inStock: true,
    },
];
