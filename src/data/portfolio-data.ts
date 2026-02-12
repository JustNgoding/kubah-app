export interface PortfolioItem {
    id: number;
    image: string;
    span: string;
}

const generatePortfolioData = (count: number): PortfolioItem[] => {
    return Array.from({ length: count }, (_, i) => {
        const id = i + 1;
        let span = "col-span-1";

        // Balanced but dynamic grid logic
        if (id % 12 === 1) span = "md:col-span-2 md:row-span-2"; // Large square
        else if (id % 12 === 5) span = "md:col-span-2 md:row-span-1"; // Horizontal wide
        else if (id % 12 === 8) span = "md:row-span-2"; // Vertical tall
        else if (id % 12 === 10) span = "md:col-span-2"; // Horizontal wide

        return {
            id,
            image: `./assets/images/portfolio/portfolio${id}.jpeg`,
            span,
        };
    });
};

export const portfolioImages = generatePortfolioData(95);
