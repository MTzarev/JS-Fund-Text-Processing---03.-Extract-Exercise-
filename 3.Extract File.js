function extractFile (string){
let fileName= string.substring(string.lastIndexOf(`\\`)+1)
let lastDotIndex = fileName.lastIndexOf(`.`);

let outputName = fileName.substring(0, lastDotIndex);
let outputExtention = fileName.substring(lastDotIndex+1)
    console.log(`File name: ${outputName}`)
    console.log(`File extension: ${outputExtention}`);

}
//extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');