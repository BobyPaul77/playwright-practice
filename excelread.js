const ExcelJS = require('exceljs');

//Install exceljs using command "npm install exceljs"
async function writeExcelFileTest(searchValue,replaceText,filePath) {
    // Create a new workbook and add a worksheet
    
    const workbook = new ExcelJS.Workbook(); //exceljs derived from installed exceljs package
    await workbook.xlsx.readFile(filePath)// built-in function - readfile(filepath)
    const worksheet = workbook.getWorksheet('LoginPage');// Given excel sheetname
    const output = await readExcelFile(worksheet,searchValue);

    const cell = worksheet.getCell(output.row, output.col); // Get the cell at row 2, column 2 (B2)
    cell.value = replaceText; // Update the cell value
    await workbook.xlsx.writeFile(filePath);

}

async function readExcelFile(worksheet,searchValue) {
    let output = {row:-1, col:-1};// Dictionary - key:value pair
     worksheet.eachRow((row, rowNumber) => {   // syntax to read each row
        row.eachCell((cell, colNumber) => {// syntax to read each column
            //console.log(cell.value); -- To print all cell values
            if (cell.value === searchValue) { // === used to allocate the value along with memory allocation
               // console.log(`Row ${rowNumber} Cell ${colNumber} = ${cell.value}`);
                output.row = rowNumber;
                output.col = colNumber;
             
                
            }
        })
    })
    return output;
}

writeExcelFileTest("user","password7","C:/Users/bobyp/Downloads/Test.xlsx"); // updating existing excel values through code.