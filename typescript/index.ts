// interface Lada {
//   typeMark: "lada";
//   name: "Eraj" | "Sasha";
// }

// interface BMW {
//   typeMark: "BMW";
//   walk: "Some";
// }

// type Cars = BMW | Lada;

// function switcher(params: Cars): params is BMW {
//   return params.typeMark === "BMW";
// }

// function test(car: Cars): string {
//   if (switcher(car)) {
//     return car.walk;
//   }
//   return "";
// }

// Need to split some Code

// type CarBrand = "Lada" | "BMW" | "Tayota";

// interface CarBase {
//   year: number;
//   brand: CarBrand;
// }

// interface Lada extends CarBase {
//   board: string;
//   brand: "Lada";
// }
// interface BMW extends CarBase {
//   brand: "BMW";
//   side: boolean;
// }

// interface Tayota extends CarBase {
//   brand: "Tayota";
//   someBoard: boolean;
// }

// type Cars = BMW | Lada | Tayota;

// function exhaustiveCeck(params: never) {
//   console.log("plce exhause param" + params);
// }

// function takeCar(Car: Cars) {
//   switch (Car.brand) {
//     case "BMW":
//       return 12;
//     case "Lada":
//       return "";
//     case "Tayota":
//       break;
//     default:
//       exhaustiveCeck(Car);
//   }
// }

// Need to split some Code

// const enum UserRole {
//   Car = "Move",
//   Bird = "Fly",
// }

// enum UserRoles {
//   Car = "Move",
//   Bird = "Fly",
// }

// const UserRole = {
//   Car: "Move",
//   Bird: "Fly",
// } as const;

// type UserRole = (typeof UserRole)[keyof typeof UserRole];

// function fn(params: UserRole) {}

// fn(UserRole.Car);
// fn(UserRoles.Car);

// console.log(typeof UserRole);

// for (const key in /*UserRole*/ UserRoles) {
//   console.log(key);
// }
