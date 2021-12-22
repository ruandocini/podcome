/**
 * @jest-environment jsdom
 */

const newRest = require('./newRest');

test('Add new rest to the database', () => {
    document.body.innerHTML = `
    <body>
    <div class="testbox">
      <form>
        <div class="banner">
          <h1>Novo Restaurante</h1>
        </div>
        <br/>

          <div class="item">
            <label for="user">Usuario<span>*</span></label>
            <input id="user" type="text" name="restaurant_name" />
          </div>

          <div class="item">
            <label for="password">Senha<span>*</span></label>
            <input id="password" type="text" name="restaurant_name" />
          </div>

          <div class="item">
            <label for="restaurant_name"> Nome do Restaurante<span>*</span></label>
            <input id="restaurant_name" type="text" name="restaurant_name" />
          </div>

          <div class="item">
            <label for="restaurant_address">Endereço do Restaurante<span>*</span></label>
            <input id="restaurant_address" type="text" name="restaurant_address" />
          </div>

          <div class="item">
            <label for="restaurant_contact">Contato do Restaurante<span>*</span></label>
            <input id="restaurant_contact" type="text" name="restaurant_contact" />
          </div>

          <div class="question">
            <label>Faixa de preço do seu restaurante:</label>
            <div class="question-answer">
              <div>
                <input type="radio" value="$" id="$" name="price"/>
                <label for="$" class="radio"><span>$</span></label>
              </div>
              <div>
                <input  type="radio" value="$$" id="$$" name="price"/>
                <label for="$$" class="radio"><span>$$</span></label>
              </div>
              <div>
                <input  type="radio" value="$$$" id="$$$" name="price"/>
                <label for="$$$" class="radio"><span>$$$</span></label>
              </div>
              <div>
                <input  type="radio" value="$$$$" id="$$$$" name="price"/>
                <label for="$$$$" class="radio"><span>$$$$</span></label>
              </div>
              <div>
                <input  type="radio" value="$$$$$" id="$$$$$" name="price"/>
                <label for="$$$$$" class="radio"><span>$$$$$</span></label>
              </div>
            </div>
          </div>

          <div class="question">
            <label>Qual desses é verdade sobre seu restaurante?</label>
            <div class="question-answer">
              <div>
                <input type="radio" value="feira_livre" id="feira_livre" name="restriction"/>
                <label for="feira_livre" class="radio"><span>Meu restaurante faz parte de uma feira livre.</span></label>
              </div>
              <div>
                <input  type="radio" value="vegano" id="vegano" name="restriction"/>
                <label for="vegano" class="radio"><span>Meu restaurante possui pratos para veganos.</span></label>
              </div>
              <div>
                <input  type="radio" value="celiaco" id="celiaco" name="restriction"/>
                <label for="celiaco" class="radio"><span>Meu restaurante possui pratos para celíacos.</span></label>
              </div>
              <div>
                <input  type="radio" value="diabetico" id="diabetico" name="restriction"/>
                <label for="diabetico" class="radio"><span>Meu restaurante possui pratos para diabéticos.</span></label>
              </div>
              <div>
                <input  type="radio" value="lactose" id="lactose" name="restriction"/>
                <label for="lactose" class="radio"><span>Meu restaurante possui pratos para intolerantes à lactose.</span></label>
              </div>
            </div>
          </div>

          <div class="question">
            <label>Restaurante possui entrega?</label>
            <div class="question-answer">
              <div>
                <input type="radio" value="possui_entrega" id="possui_entrega" name="delivery"/>
                <label for="possui_entrega" class="radio"><span>Sim.</span></label>
              </div>
              <div>
                <input  type="radio" value="nao_possui_entrega" id="nao_possui_entrega" name="delivery"/>
                <label for="nao_possui_entrega" class="radio"><span>Não.</span></label>
              </div>
            </div>
          </div>

          <div>
            <button id="addbtn" type="submit" onclick="createRestaurant()" formaction="/login-page.html">Criar Restaurante</button>
            <button type='submit' formaction="/index.html"> Voltar </button>
          </div>

      </form>
    </div>
  </body>`;

    const restaurant_name = document.getElementById('restaurant_name');
    restaurant_name.value = 'Restaurante Teste';

    const addTodoBtn = document.getElementById('addbtn');


    expect(restaurant_name.innerHTML).toBe(
        'Restaurante Teste'
    );

});

test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });