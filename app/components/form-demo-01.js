import Component from "@ember/component";
import { validator, buildValidations } from "ember-cp-validations";

const Validations = buildValidations({
  username: validator("presence", { presence: true, message: "必須フィールドです" }),
  password: [
    validator("presence", { presence: true, message: "必須フィールドです" }),
    validator("length", {
      min: 4,
      message: "4文字以上入力してください",
    }),
  ],
  email: [
    validator("presence", { presence: true, message: "必須フィールドです" }),
    validator("format", { type: "email", message: "Emailのフォーマットを入力してください" }),
  ],
  emailConfirmation: [
    validator("presence", { presence: true, message: "必須フィールドです" }),
    validator("confirmation", {
      on: "email",
      message: "Emailアドレスが合致しません",
      description: "Emailアドレスの確認",
    }),
  ],
});

export default Component.extend(Validations, {
  username: null,
  password: null,
  email: null,
  emailConfirmation: null,
  actions: {
    onSubmit() {
      console.log({
        username: this.username,
        password: this.password,
        email: this.email,
        emailConfirmation: this.emailConfirmation,
      });
    },
  },
});
