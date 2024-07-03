export interface CarouselProps {
    title: string;
    description: string;
    src: string; 
}

export interface ICategoryComponent {
    productCategoryID: number;
    categoryName: string;
    categoryDescription: string;
    createdAt: string;
    updatedAt: string;
}

export interface StateItem {
    name: string;
    stateID: number;
    code: string;
}