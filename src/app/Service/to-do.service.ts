import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ToDo } from '../Models/to-do';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private _http:HttpClient) { }

   /**
   * lấy danh sách todo
   * @returns -1: thất bại, danh sách: thành công
   */
  async Get(): Promise<any> {
    return lastValueFrom(
        await this._http.get<any>('https://localhost:7054/api/Todo')).then((res: any) => { 
          if (res.status != "success")
          {
            return -1;
          }
          return (this.ToToDoList(res.data));
        });
  };

   /**
   * thêm mới
   * @param todo thông tin thêm mới
   * @returns -1: thất bại, 0: thành công
   */
  async Post(todo:ToDo): Promise<any> {
    return lastValueFrom(
      await this._http.post<any>('https://localhost:7054/api/Todo', todo)).then((res: any) => { 
        if (res.status != "success")
        {
          return -1;
        }
        return 0;
      });
  }

  /**
   * cập nhật
   * @param todo thông tin cập nhật
   * @returns -1: thất bại, 0: thành công
   */
  async Put(todo:ToDo): Promise<any> {
    return lastValueFrom(
      await this._http.put<any>('https://localhost:7054/api/Todo', todo)).then((res: any) => { 
        if (res.status != "success")
        {
          return -1;
        }
        return 0;
      });
  }

  /**
   * xóa
   * @param id mã todo cần xóa
   * @returns -1: thất bại, 0: thành công
   */
  async Del(id:number): Promise<any> {
    return lastValueFrom(
      await this._http.delete<any>('https://localhost:7054/api/Todo/' + id)).then((res: any) => { 
        if (res.status != "success")
        {
          return -1;
        }
        return 0;
      });
  }

   /**
   * chuyển đổi dữ liệu trả về từ api sang mảng TODO
   * @param dataLst data trả về từ api
   * @returns danh sách TODO đã chuyển đổi
   */
  private ToToDoList(dataLst: any[]) : ToDo[]
  {
    var todoLst : ToDo[] = []; 
      for (var i = 0; i< dataLst.length; i++)
      {
        try
        {
          todoLst.push(new ToDo(dataLst[i].id, dataLst[i].name, dataLst[i].content, dataLst[i].isComplete));
        }
        catch
        {
        }
      }
      return todoLst;
    }
}