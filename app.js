//book constructor
function Book(title,author,isbn){
    this.author=author;
    this.isbn = isbn;
    this.title =title
}

//ui constroctor

function uiBook(){}


uiBook.prototype.addBookToList = function (book){
    const list = document.getElementById('book-list');
    const tr = document.createElement('tr');
    //insert cols

    tr.innerHTML = `<td>${book.title}</td>
                  <td>${book.author}</td>
                 <td>${book.isbn}</td>
                 <td><a href ="#" class="delete">X</a></td>`;
                        
        list.appendChild(tr);
    }
uiBook.prototype.showError = function(msg,className){
    //create div 
    const div =document.createElement('div');
    //add classname
    div.className=`alert ${className}`;
    div.appendChild(document.createTextNode(msg));

    const form = document.querySelector('#book-form'); 

    const container = document.querySelector('.container');

    //inser msg

    container.insertBefore(div,form);

    //set timeout

    setTimeout(function(){
    document.querySelector('.alert').remove()},3000)
    
}

uiBook.prototype.clearfield =function(){
    document.getElementById('title').value = '',
    document.getElementById('author').value = '',
    document.getElementById('isbn').value = '';

}


//ui veriable

document.getElementById('book-form').addEventListener('submit',function(e){

    const  title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn= document.getElementById('isbn').value;
            // console.log(title,author,isbn)
          //instuate book
          const book = new Book(title,author,isbn);
          
          //instiate ui object

         const UI = new uiBook();
         
         

        //validate 

        if(title === '' || author === '' || isbn === ''){
        //show error msg
        UI.showError('please fill up all the filed','error');
         
        
        
        

        }else{
         //
        //success error
         UI.showError('add successfully','success');
        //Add book to list
        UI.addBookToList(book);

         //clear filed
         UI.clearfield()
        }

            
         e.preventDefault();

})
