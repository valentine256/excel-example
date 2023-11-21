import ExcelJS from "exceljs";
import { getSheetNames } from "./getSheetNames";

const paths = ["./data/sample01.xlsx", "./data/sample02.xlsx"];
const index = 5;

const pickSheetByIndex = async (path: string, index: number) => {
  const workbook = new ExcelJS.Workbook();

  try {
    await workbook.xlsx.readFile(path);
    return workbook.worksheets[index];
  } catch (error) {
    console.log(error);
  }
};

const pickSheetByName = async (path: string, name: string) => {
  const workbook = new ExcelJS.Workbook();

  try {
    await workbook.xlsx.readFile(path);
    return workbook.getWorksheet(name);
  } catch (error) {
    console.log(error);
  }
};

const main = async () => {
  const sheetNames = await getSheetNames(paths[0]);
  const sheetName = sheetNames ? sheetNames[index] : "";

  const sheetByIndex = await pickSheetByIndex(paths[0], index);
  const sheetByName = await pickSheetByName(paths[0], sheetName);
  console.log("sheetByIndex: ", sheetByIndex?.name);
  console.log("sheetByName: ", sheetByName?.name);
};

export { pickSheetByIndex, pickSheetByName };

// main();

// result
//
// sheetByIndex:  식당음식
// sheetByName:  식당음식
