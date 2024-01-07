
// employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
// Bu veriyi okuyalım. (READ)
// Bu veriyi güncelleyelim.
// Dosyayı silelim.
const fs = require('fs');

// fs.writeFile('employees.json','{"name":"Employee 1 Name", "salary" : 2000}', 'utf8', (err)=>{
//     if (err) console.log(err);
//     console.log('Dosya oluşturma başarıyla tamamlandı.')
// });

// fs.readFile('employees.json','utf8', (err, data)=>{
//     if(err) console.log(err);
//     console.log(data)
//     console.log('Dosya Okuma Başarıyla tamamlandı.')
// })
// fs.appendFile('employees.json', '\n{"name":"Employee 2 Name", "salary": 5000}', 'utf8', (err) => {
//     if(err) console.log(err);
//     console.log('Dosyaya Yeni Veri Başarıyla Eklendi.');
// })

fs.unlink('employees.json', (err, data)=>{
    if(err) console.log(err);
    console.log('Dosya Silme Başarıyla tamamlandı.')
})
