import ExcelJS from "exceljs";

const paths = ["./data/sample01.xlsx", "./data/sample02.xlsx"];

const getSheetNames = async (path: string) => {
  const workbook = new ExcelJS.Workbook();

  try {
    await workbook.xlsx.readFile(path);
    return workbook.worksheets.map((sheet) => sheet.name);
  } catch (error) {
    console.log(error);
  }
};

const main = async () => {
  const sheetNames = await Promise.all(paths.map(getSheetNames));
  console.log(sheetNames);
};

export { getSheetNames };

// main();

// result:
//
// [
//   [
//     '거래명세서(무궁화)',
//     '용품사용료',
//     '기본물품',
//     '추가물품',
//     '반품',
//     '식당음식',
//     '외부내역',
//     '기타이용료',
//     '관리사시급',
//     '거래명세(상주용)',
//     '상주용영수증'
//   ],
//   [
//     '거래명세서(무궁화)',
//     '용품사용료',
//     '기본물품',
//     '추가물품',
//     '반품',
//     '식당음식',
//     '외부내역',
//     '기타이용료',
//     '관리사시급',
//     '거래명세(상주용)',
//     '상주용영수증'
//   ]
// ]
