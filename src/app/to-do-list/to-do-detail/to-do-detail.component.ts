import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDo } from 'src/app/Models/to-do';
import { ToDoService } from 'src/app/Service/to-do.service';

@Component({
  selector: 'app-to-do-detail',
  templateUrl: './to-do-detail.component.html',
  styleUrls: ['./to-do-detail.component.scss']
})
export class ToDoDetailComponent implements OnInit {

  public Data:ToDo;
  public dataUpdate: any;
  constructor(private router: Router, private todoSV:ToDoService) {
    this.dataUpdate = localStorage.getItem("dataUpdate");
    if (this.dataUpdate == null)
    {
      this.Data = new ToDo(0,'','',false);
    }
    else
    {
      this.Data = JSON.parse(this.dataUpdate) as ToDo;
    }
   }

  ngOnInit(): void {
  }

  /**
   * nhấn nút quay về
   */
  public BackFnc()
  {
    this.router.navigateByUrl("/todoLst");
  }

  /**
   * cập nhật dữ liệu khi nhấn nút cạp nhật dữ liệu
   */
  public async UpdateFnc()
  {
    // biến nhận biết cập nhật dữ liệu từ api có bị lỗi không (0 là không lỗi, -1 là lỗi)
      var res = -1;

      // thực hiện thêm mới
      if (this.dataUpdate == null)
      {
        res = await this.todoSV.Post(this.Data);
      }
      else // thực hiện cập nhật
      {
        res = await this.todoSV.Put(this.Data);
      }
      // không có lỗi
      if (res != -1)
      {
        alert("Cập nhật thành công!");          // hiển thị thông báo
        this.router.navigateByUrl("/todoLst");  // quay lại trang danh sách
      }
      else
      {
        alert("Lỗi cập nhật dữ liệu!");
      }
  }
}
