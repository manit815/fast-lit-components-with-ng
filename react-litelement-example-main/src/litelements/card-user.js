
// card-user.ts

// import { LitElement, html, css } from 'lit';
// import { property, customElement } from 'lit/decorators.js';
import { css, customElement, html, LitElement, property } from 'lit-element';
// import { User } from './user';

@customElement('card-user')
class CardUser extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .card {
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.5);
      max-width: 160px;
    }
    .card-content {
      padding: 10px;
    }
  `;

  // @property() user = {
  //   id: 0,
  //   fullName: 'Luis Aviles',
  //   role: 'Software Engineer',
  // };

  @property() user = {
      id: 0,
      fullName: 'Luis Aviles',
      role: 'Software Engineer',
    };

  render() {
      const {user} = this;
    if (this.user === undefined) {
      return '';
    }

    return html`
      <div class="card">
        <img
          width="160px"
          src=${user.avatar
            ? user.avatar
            : 'assets/images/avatar.png'}
        />
        <div class="card-content">
          <h4>${user.fullName}</h4>
          <p>${user.role}</p>
          <button @click=${this.handleEdit}>Edit</button>
        </div>
      </div>
    `;
  }

  handleEdit() {
    this.dispatchEvent(
      new CustomEvent<User>('edit', {
        detail: this.user,
      })
    );
  }
}

export default CardUser;