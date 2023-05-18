import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserDto } from '../dto/user-dto';
import { ProfileModel } from '../model/profile.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  profiles: ProfileModel[] = [];

  formGroup = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.email, Validators.required]),
    profile: new FormControl,
    password: new FormControl<string>('', [Validators.required]),
    confirm_pass: new FormControl<string>('', [Validators.required])
  })

  constructor(
    private service: UserService,
    private messageService: MessageService,
    private router: Router,
    private renderer: Renderer2
  ) { }

  get name() {return this.formGroup.get('name')}  
  get email() {return this.formGroup.get('email')}
  get profile(){return this.formGroup.get('profile')}
  get password(){return this.formGroup.get('password')}
  get confirm_pass(){return this.formGroup.get('confirm_pass')}

  ngOnInit() {
    this.getAllProfiles()
  }

  getAllProfiles() {
    this.service.getAllProfiles().subscribe(obj => {
      this.profiles = obj
    })
  }

  public saveNewUser() {

    let user: UserDto = {
      name: this.formGroup.controls.name.value,
      email: this.formGroup.controls.email.value,
      profileId: this.formGroup.controls.profile.value['id'],
      password: this.formGroup.controls.password.value
    }

    if (this.verifiedData(user)) {
      this.service.saveNewUser(user).subscribe(obj => {
        if (obj !== null) {
          this.messageService.add({ severity: 'success', summary: 'Cadastro de Usuário', detail: `Usuário ${obj.name} salvo com sucesso!` })
          this.clearFields()
        }
      })
    }

  }

  private verifiedData(user: UserDto): boolean {
    if (user.name === null || user.name === '') {
      this.messageService.add({ severity: 'error', summary: 'Erro Nome', detail: 'O campo nome não pode estar em branco!' })
      this.renderer.selectRootElement('#name').focus()
      return false
    }

    if (user.email === null || user.email === '') {
      this.messageService.add({ severity: 'error', summary: 'Erro E-mail', detail: 'O campo e-mail não pode estar em branco!' })
      this.renderer.selectRootElement('#email').focus()
      return false
    }

    if (user.password === null || user.password === '') {
      this.messageService.add({ severity: 'error', summary: 'Erro Senha', detail: 'O campo senha não pode estar em branco!' })
      this.renderer.selectRootElement('#password').focus()
      return false
    }

    if (this.password?.value !== this.confirm_pass?.value){
      console.log(this.password?.value)
      console.log(this.confirm_pass?.value)
      this.messageService.add({ severity: 'error', summary: 'Erro Senha', detail: 'As senhas não conferem!' })
      this.renderer.selectRootElement('#password').focus()
      return false
    }

    return true
  }

  private clearFields(): void {
    this.name?.setValue('')
    this.email?.setValue('')
    this.password?.setValue('')
    this.confirm_pass?.setValue('')
  }

}
