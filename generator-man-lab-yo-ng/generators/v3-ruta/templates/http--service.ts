import {Injectable} from '@angular/core';
import {<%= nombreMayuscula %>FindDto} from './dto/<%= nombreGuiones %>.find-dto';
import {<%= nombreMayuscula %>ResponseDto} from './dto/<%= nombreGuiones %>.response-dto';
import {<%= nombreMayuscula %>CreateDto} from './dto/<%= nombreGuiones %>.create-dto';
import {<%= nombreMayuscula %>UpdateDto} from './dto/<%= nombreGuiones %>.update-dto';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class Http<%= nombreMayuscula %>Service
  extends AbstractHttpService<<%= nombreMayuscula %>FindDto, <%= nombreMayuscula %>ResponseDto, <%= nombreMayuscula %>CreateDto, <%= nombreMayuscula %>UpdateDto>{
  constructor(private readonly _httpClient:HttpClient) {
    super(
      environment.url,
      {
        URLSection: '/<%= nombreGuiones %>',
        http: _httpClient
      }
    );
  }
}
