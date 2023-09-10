import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDo } from '../Models/to-do';
import { ToDoService } from '../Service/to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  public TodoLst: ToDo[] = [];

  constructor(private router: Router, private todoSV: ToDoService)
  {
    this.TodoLst = [];
  }

  async ngOnInit() {
    // lấy danh sách dữ liệu từ api
    var data = await this.todoSV.Get();
    if (data == -1) // hiển thị thông báo nếu không thành công
    {
      alert("lấy dữ liệu không thành công!");
    }
    else
    {
      this.TodoLst = data;  // load thông tin lên màn hình
    }
  }

  /**
   * khi nhấn nút thêm mới
   */
  public AddFnc()
  {
    localStorage.clear();
     this.router.navigateByUrl("/todoDetail");
  }
  
  /**
   * khi nhấn nút chỉnh sửa
   * @param data dữ liệu dòng chỉnh sửa
   */
  public ModFnc(data:ToDo)
  {
    localStorage.clear(); // xóa thông tin tren localStorage
    if (data)
    {
      localStorage.setItem("dataUpdate", JSON.stringify(data)); // lưu thông tin trên localStorage
    }
    this.router.navigateByUrl("/todoDetail"); // di chuyển đến trang detail
  }

  /**
   * khi nhấn nút xóa
   * @param data dữ liệu dòng xóa
   */
 public async DelFnc(data:ToDo)
  {
    var res = await this.todoSV.Del(data.Id); // thực hiện xóa bên api
    if (res != -1) // xóa thành công
    {
      alert("xóa thành công!");
      this.TodoLst = await this.todoSV.Get(); // load lại dữ liệu
    }
    else
    {
      alert("xóa không thành công!");
    }
  }
}
