export const PER_PAGE_OPTIONS = [4, 8, 16, 32, 64].map(String);

export const SORT_TYPES: {title: string; sortBy:string; sortType: string}[] = [
    {title: 'Newest', sortBy:'year', sortType: 'desc'},
    {title: 'Oldest', sortBy:'year', sortType: 'asc'},
    {title: 'Most Expensive', sortBy:'price', sortType: 'desc'},
    {title: 'Cheapest', sortBy:'price', sortType: 'asc'},
];