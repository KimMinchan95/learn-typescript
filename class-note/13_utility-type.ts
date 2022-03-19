interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
// function fetchProducts(): Promise<Product[]> {
    //...
// }

// 인터페이스를 재정의 하면 중복코드들이 발생함
interface ProducetDetail {
    id: number;
    name: string;
    price: number;
}

//* 유틸리티타입: Pick - 첫 번째는 어떤인터페이스에서 가져올 것이냐, 두 번째는 어떤 key들을 가져올 것이냐
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>

// 상세정보 조회: 인터페이스의 모양이 다를 수 있다.
function displayProductDetail(shoppingItem: ShoppingItem) {
    
}

//* Omit은 Pick과 반대되는 개념: 특정 타입에서 선택한 key빼고 나머지를 가져온다
type ShoppingItemWithOmit = Omit<Product, 'brand' | 'stock'>

// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

//* Partial은 모든 속성을 옵셔널 처리한다 위의 UpdateProduct와 같은 효과
type UpdateProduct = Partial<Product>
// Partial - 특정 상품 정보를 업데이트(갱신)하는 함수
function updateProductItem(productItem: Partial<Product>) {

}

//* 유틸리티 타입 구현하기 - Partial
interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}
// interface UserProfileUpdate {
//     username?: string;
//     email?: string;
//     profilePhotoUrl?: string;
// }

// #1
// type UserProfileUpdate {
    // username?: UserProfile['username'];
    // email?: UserProfile['email'];
    // profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// }

// #2: Mapped Type 형태
// type UserProfileUpdate = {
//     [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
// }

// #3: keyof를 사용해서 전부 모든 key를 돌리기
type UserProfileKeys = keyof UserProfile;

type UserProfileUpdate = {
    [p in keyof UserProfile]?: UserProfile[p];
}

// #4: 제네릭을 사용해서 다른 곳에서도 사용할 수 있게 변경 SubSet === Patrial
type SubSet<T> = {
    [p in keyof T]?: T[p];
}