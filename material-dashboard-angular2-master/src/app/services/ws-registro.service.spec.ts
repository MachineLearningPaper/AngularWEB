import { TestBed } from '@angular/core/testing';

import { WsRegistroService } from './ws-registro.service';

describe('WsRegistroService', () => {
  let service: WsRegistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsRegistroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
