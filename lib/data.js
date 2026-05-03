import ghee1LImg from '@/components/Images/image1.png';
import ghee500mlImg from '@/components/Images/image2.png';
import ghee250mlImg from '@/components/Images/image1.png';
import gheeComboImg from '@/components/Images/image3.png';

export const PRODUCTS = [
    {
        id: 'ghee-1l',
        name: 'Pure Cow Ghee',
        slug: 'pure-cow-ghee-1l',
        description:
            'Rich, aromatic ghee crafted using traditional methods. Ideal for families and regular use.',
        price: 1800,
        unit: '1 Litre',
        image: ghee1LImg,
        inStock: true,
    },

    {
        id: 'ghee-500ml',
        name: 'Pure Cow Ghee',
        slug: 'pure-cow-ghee-500ml',

        description:
            'Golden, flavorful ghee with a smooth texture. Perfect for everyday cooking.',

        price: 950,
        unit: '500 ml',
        image: ghee500mlImg,
        inStock: true,
    },

    {
        id: 'ghee-combo',
        name: 'Pure Cow Ghee Combo Pack',
        slug: 'pure-cow-ghee-combo',

        description:
            'Value combo pack for regular use. Save more while enjoying the same purity and taste.',

        price: 2600,
        unit: '1L + 500ml',
        image: gheeComboImg,
        inStock: true,
    },
    {
        id: 'ghee-250ml',
        name: 'Pure Cow Ghee',
        slug: 'pure-cow-ghee-250ml',

        description:
            'Compact pack with the same rich aroma and purity. Great for small families or trial use.',

        price: 500,
        unit: '250 ml',
        image: ghee250mlImg,
        inStock: true,
    },
];