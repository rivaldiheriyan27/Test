npx sequelize-cli model:generate --name User --attributes email:string,password:string 

npx sequelize-cli model:generate --name List --attributes nik:string,fullName:string,place:string,dateBirth:date 

npx sequelize-cli seed:generate --name 'seedList'



1.	Buat CRUD untuk blacklist, data yang di input:
-	NIK KTP
-	Nama Lengkap
-	Tempat
-	Tanggal lahir
2.	Kondisi return:
-	NIK KTP – jika match return “blacklist”
-	Jika NIK KTP tidak sama, tetapi Nama + Tempat + Tanggal Lahir match -  return “blacklist”
-	Selain itu return “clear”
3.	Buat API untuk dipanggil Front End/Mobile, publish di postman
4.	Buat dockerfile untuk build service 
5.	Push semua source ke git repo dan lampirkan link ke repo tersebut
