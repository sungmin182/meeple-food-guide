export interface Restaurant {
  id: number;
  rank: number;
  name: string;
  category: string;
  walkTime: number;
  address: string;
  description: string;
  signature: string;
  lat: number;
  lng: number;
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    rank: 1,
    name: "봉용불고기",
    category: "한식 · 불고기",
    walkTime: 4,
    address: "충북 청주시 청원구 중앙로 108",
    description: "청주를 대표하는 간장 삼겹살 불고기 맛집입니다. 얇은 삼겹살을 간장 소스에 구워 파절이와 볶아 먹는 방식이 일품이며, 마지막 볶음밥은 필수입니다. 매장이 넓어 모임 후 단체 식사에도 최적입니다.",
    signature: "간장 삼겹살 불고기, 볶음밥",
    lat: 36.6424,
    lng: 127.4889
  },
  {
    id: 2,
    rank: 2,
    name: "영광이네",
    category: "한식 · 우동/돈가스",
    walkTime: 8,
    address: "충북 청주시 상당구 수암로 43",
    description: "드라마 촬영지로 유명한 추억의 우동과 돈가스 맛집입니다. 쫄깃한 면발의 우동과 바삭한 수제 돈가스가 주메뉴이며, 식사 후 수암골의 멋진 야경을 감상하기에도 매우 좋은 위치입니다.",
    signature: "우동, 수제 돈가스",
    lat: 36.6398,
    lng: 127.4932
  },
  {
    id: 3,
    rank: 3,
    name: "아!그집식당",
    category: "한식 · 새뱅이찌개",
    walkTime: 3,
    address: "충북 청주시 상당구 상당로204번길 34",
    description: "미플 바로 인근 골목에 위치한 로컬 맛집입니다. 민물새우가 듬뿍 들어간 새뱅이찌개는 청주 사람들이 사랑하는 별미입니다. 든든한 저녁 식사는 물론, 가벼운 반주를 곁들이기에도 좋습니다.",
    signature: "새뱅이찌개(민물새우탕)",
    lat: 36.6412,
    lng: 127.4901
  },
  {
    id: 4,
    rank: 4,
    name: "방아다리 추어탕",
    category: "한식 · 추어탕",
    walkTime: 5,
    address: "충북 청주시 상당구 북문로3가 5-3",
    description: "방아다리 사거리에 위치한 노포 맛집입니다. 주문 즉시 지어주는 냄비밥과 진한 국물의 추어탕이 제공되어 건강하고 든든한 한 끼를 책임집니다. 어른들과 함께하는 모임이라면 더욱 추천합니다.",
    signature: "추어탕, 냄비밥",
    lat: 36.6418,
    lng: 127.4895
  },
  {
    id: 5,
    rank: 5,
    name: "노랑통닭 청주우암점",
    category: "치킨",
    walkTime: 2,
    address: "충북 청주시 상당구 용암로99번길 3",
    description: "미플에서 가장 가까운 프랜차이즈 맛집 중 하나입니다. 보드게임 후 가볍게 치맥을 즐기며 모임의 여운을 나누기에 가장 편리한 장소입니다.",
    signature: "가마솥 치킨",
    lat: 36.6408,
    lng: 127.4912
  },
  {
    id: 6,
    rank: 6,
    name: "계룡산삼식당",
    category: "한식 · 백반",
    walkTime: 5,
    address: "충북 청주시 상당구 교동로3번길 163",
    description: "미플에서 남쪽으로 조금만 내려가면 있는 식당으로, 집밥 같은 편안한 한식을 제공합니다. 삼겹살이나 백반 메뉴가 잘 나와서 부담 없이 저녁 식사를 해결하기 좋습니다.",
    signature: "백반, 삼겹살",
    lat: 36.6402,
    lng: 127.4905
  },
  {
    id: 7,
    rank: 7,
    name: "낙동강 메기매운탕",
    category: "한식 · 매운탕",
    walkTime: 5,
    address: "충북 청주시 상당구 대성로213번길 22",
    description: "계룡산삼식당 인근에 위치하며, 얼큰한 국물 요리를 선호하는 모임에 추천합니다. 메기매운탕의 깊은 맛과 수제비 사리의 조합이 훌륭합니다.",
    signature: "메기매운탕, 수제비",
    lat: 36.6400,
    lng: 127.4903
  },
  {
    id: 8,
    rank: 8,
    name: "성진식당",
    category: "한식 · 백반",
    walkTime: 7,
    address: "충북 청주시 청원구 수암로 82",
    description: "청주대학교 중문 인근에 위치하여 가격이 매우 저렴하면서도 양이 푸짐합니다. 학생들뿐만 아니라 인근 주민들도 즐겨 찾는 실속 있는 맛집입니다.",
    signature: "백반, 제육볶음",
    lat: 36.6385,
    lng: 127.4945
  },
  {
    id: 9,
    rank: 9,
    name: "카페파숑",
    category: "카페 · 브런치",
    walkTime: 4,
    address: "충북 청주시 상당구 대성로 226번길",
    description: "헤비한 식사보다는 샌드위치나 가벼운 브런치 스타일의 저녁을 선호한다면 좋은 선택지입니다. 아늑한 분위기에서 대화를 나누기 좋습니다.",
    signature: "샌드위치, 브런치",
    lat: 36.6410,
    lng: 127.4908
  },
  {
    id: 10,
    rank: 10,
    name: "피읖공작소",
    category: "양식 · 피자",
    walkTime: 9,
    address: "충북 청주시 상당구 수암로",
    description: "수암골 올라가는 길목에 위치한 힙한 피자집입니다. 젊은 층이 선호하는 분위기와 맛을 갖추고 있어, 보드게임 모임의 즐거운 분위기를 이어가기에 적합합니다.",
    signature: "수제 피자",
    lat: 36.6392,
    lng: 127.4938
  }
];

// 미플 보드게임 카페 위치
export const meepleLocation = {
  name: "미플(Meeple) 보드게임 카페",
  address: "충북 청주시 상당구 대성로226번길 3",
  lat: 36.6405,
  lng: 127.4915
};
