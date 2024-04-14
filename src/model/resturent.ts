// let data = {
//     name: '누나네 식당',
//     category: 'western',
//     address: {
//       city: 'incheoi',
//       detail: 'somewhere',
//       zipcode: 12456
//     },
//     manu: [{name:'rose pasta',price:2300,category:'PASTA'},{name:'garlic steak',price:30000,category:'STEAK'}]
//   }

export type Resturent = {
    name:string;
    category: string;
    address: Address;
    menu: Menu[];
}

export type Address = {
    city: string;
    detail: string;
    zipCode: number;
}

export type Menu = {
    name:string;
    price:number;
    category:string;
}

export type AddressWithoutZip = Omit<Address,'zipCode'>
export type ResturentOnlyCagegory = Pick<Resturent, 'category'>

export type ApiResponse<T> = {
    data:T[],
    totalPage:number,
    page:number
}

export type ResturentResponse = ApiResponse<Resturent>
export type MenuResponse = ApiResponse<Menu>