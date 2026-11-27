const KEY="bookshelf-books-v1";
const starter=[
{id:1,title:"Clean Code",author:"Robert C. Martin",category:"Công nghệ",status:"Đang đọc",cover:"covers/code.svg"},
{id:2,title:"Tư duy thiết kế",author:"Bookshelf",category:"Kỹ năng",status:"Muốn đọc",cover:"covers/design.svg"},
{id:3,title:"Khu vườn bí mật",author:"Frances Hodgson Burnett",category:"Văn học",status:"Đã đọc",cover:"covers/garden.svg"},
{id:4,title:"Hành trình khám phá",author:"Bookshelf",category:"Khác",status:"Muốn đọc",cover:"covers/journey.svg"}];
function load(){try{return JSON.parse(localStorage.getItem(KEY))||starter;}catch{return starter;}}
let books=load();
const list=document.getElementById("book-list"),form=document.getElementById("book-form"),search=document.getElementById("search"),filter=document.getElementById("filter"),message=document.getElementById("form-message");
function save(){localStorage.setItem(KEY,JSON.stringify(books));}
function render(){
 const q=search.value.trim().toLocaleLowerCase("vi"),f=filter.value;
 const shown=books.filter(b=>(b.title+" "+b.author).toLocaleLowerCase("vi").includes(q)&&(f==="Tất cả"||b.status===f));
 list.innerHTML="";
 if(!shown.length){list.innerHTML='<p class="empty">Không tìm thấy sách phù hợp.</p>';return;}
 shown.forEach(b=>{
  const card=document.createElement("article");card.className="book-item";
  const img=document.createElement("img");img.src=b.cover||"covers/journey.svg";img.alt="Bìa minh họa "+b.title;
  const title=document.createElement("h3");title.textContent=b.title;
  const author=document.createElement("p");author.className="meta";author.textContent="Tác giả: "+b.author;
  const category=document.createElement("p");category.className="meta";category.textContent="Thể loại: "+b.category;
  const status=document.createElement("span");status.className="status";status.textContent=b.status;
  const actions=document.createElement("div");actions.className="actions";
  const change=document.createElement("button");change.type="button";change.textContent="Đổi trạng thái";
  change.addEventListener("click",()=>{const states=["Muốn đọc","Đang đọc","Đã đọc"];b.status=states[(states.indexOf(b.status)+1)%states.length];save();render();});
  const del=document.createElement("button");del.type="button";del.className="delete";del.textContent="Xóa";del.setAttribute("aria-label","Xóa sách "+b.title);
  del.addEventListener("click",()=>{books=books.filter(x=>x.id!==b.id);save();render();});
  actions.append(change,del);card.append(img,title,author,category,status,actions);list.append(card);
 });
}
form.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(form);books.unshift({id:Date.now(),title:d.get("title").trim(),author:d.get("author").trim(),category:d.get("category"),status:d.get("status"),cover:"covers/journey.svg"});save();form.reset();message.textContent="Đã thêm sách vào thư viện!";render();});
search.addEventListener("input",render);filter.addEventListener("change",render);render();