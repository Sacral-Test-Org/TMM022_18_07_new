export class FormModel {
  sysdate: Date;
  screenName: string;
  mode: string = 'View Mode';
  unitId: string;
  unitName: string;
  groupId: string;
  groupName: string;
  lineId: string;
  lineDesc: string;
  partId: string;
  partNo: string;
  partDesc: string;
  partStatus: string = 'Inactive';

  constructor() {
    this.sysdate = new Date();
    this.screenName = '';
    this.mode = 'View Mode';
    this.unitId = '';
    this.unitName = '';
    this.groupId = '';
    this.groupName = '';
    this.lineId = '';
    this.lineDesc = '';
    this.partId = '';
    this.partNo = '';
    this.partDesc = '';
    this.partStatus = 'Inactive';
  }
}
