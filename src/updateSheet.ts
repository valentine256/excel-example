import ExcelJS from "exceljs";
import { getSheetNames } from "./getSheetNames";

const readPath = "./data/sample01.xlsx";
const writePath = "./result/result01.xlsx";

const index = 1;

const sleep = new Promise((resolve) => setTimeout(resolve, 100));

const updateSheetByName = async (path: string, name: string) => {
  const workbook = new ExcelJS.Workbook();

  try {
    await workbook.xlsx.readFile(path);
    const worksheet = workbook.getWorksheet(name);
    if (!worksheet) return new Error("No worksheet found");

    // put random number 1~50 from cell C4 to cell C12
    for (let i = 12; i >= 4; i--) {
      await sleep;
      worksheet.getCell(`C${i}`).value = Math.floor(Math.random() * 50) + 1;
    }

    await workbook.xlsx.writeFile(writePath);
    return `success, check result folder: ${writePath}`;
  } catch (error) {
    console.log(error);
  }
};

const main = async () => {
  const sheetNames = await getSheetNames(readPath);
  const sheetName = sheetNames ? sheetNames[index] : "";

  const updateResult = await updateSheetByName(readPath, sheetName);
  console.log(updateResult);
};

export { updateSheetByName };

main();
