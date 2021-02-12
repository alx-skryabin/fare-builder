export class RateTemplates {
    static slideOne() {
        return `
		<div class="payment_slide payment_slide-one">
		<div>
		<div class="payment_title">
		<div>Расчет тарифного плана</div>
		<span>Шаг 1 из 3</span>
		</div>
		<hr>
		<div class="payment_desc">
		Выберите количество уникальных посетителей вашего сайта за 1 месяц
		</div>
		<div class="payment_input-visitors">
		<input type="text" value="10000" placeholder="10 000">
		<span>Посетителей в месяц</span>
		</div>
		<div class="payment_range-visitors">
		<div class="range-visitors_point">
		<div></div><div></div><div></div><div></div><div></div>
		</div>
		<input type="range" class="custom-range" value='100' min="1" max="401" id="payRange">
		<div class="range-visitors_value">
		<div>0</div>
		<div>10 000</div>
		<div>50 000</div>
		<div>150 000</div>
		<div>300 000+</div>
		</div>
		</div>
		<div class="payment_choosed-tarif">Тарифный план: <span>start</span></div>
		<div class="payment_base-cost">Базовая цена: <span>990</span>₽</div>
		</div>
		<div class="payment_navigation">
		<div class="navigation_next">
		<button class="btn btn-sm">Далее</button>
		</div>
		</div>
		</div>`
    }

    static slideTwo() {
        return `
		<div class="payment_slide payment_slide-two">
		<div>
		<div class="payment_title">
		<div>Расчет тарифного плана</div>
		<span>Шаг 2 из 3</span>
		</div>
		<hr>
		<div class="payment_desc">
		Выберите функционал который планируете использовать на вашем сайте
		</div>
		<div class="payment_checkbox-module">
		<div class="checkbox-module_item">
		<div class="checkbox-module_check">
		<div class="custom-control custom-checkbox">
		<input type="checkbox" id="moduleType1" name="moduleType" class="custom-control-input" checked disabled>
		<label class="custom-control-label" for="moduleType1">Онлайн чат</label>
		</div>
		</div>
		<div class="checkbox-module_value">Бесплатно</div>
		</div>
		<div class="checkbox-module_item">
		<div class="checkbox-module_check">
		<div class="custom-control custom-checkbox">
		<input type="checkbox" id="moduleType2" name="moduleType" class="custom-control-input" checked>
		<label class="custom-control-label" for="moduleType2">Чат-бот</label>
		</div>
		</div>
		<div class="checkbox-module_value">+2 400₽ в мес</div>
		</div>
		<div class="checkbox-module_item">
		<div class="checkbox-module_check">
		<div class="custom-control custom-checkbox">
		<input type="checkbox" id="moduleType3" name="moduleType" class="custom-control-input">
		<label class="custom-control-label" for="moduleType3">Видео+аудио</label>
		</div>
		</div>
		<div class="checkbox-module_value">+3 500₽ в мес</div>
		</div>
		<div class="checkbox-module_item">
		<div class="checkbox-module_check">
		<div class="custom-control custom-checkbox">
		<input type="checkbox" id="moduleType4" name="moduleType" class="custom-control-input">
		<label class="custom-control-label" for="moduleType4">VIP пакет *</label>
		</div>
		</div>
		<div class="checkbox-module_value">+25 000₽ в мес</div>
		</div>
		</div>

		<div class="payment_footnote">
		* VIP пакет включает: помощь в настройке квиза и чат-бота, приоритетная техническая поддержка, персональный менеджер.
		</div>
		</div>
		<div class="payment_navigation">
		<div class="navigation_back">
		<button class="btn btn-sm">
		<i class="fas fa-long-arrow-alt-left"></i>
		</button>
		</div>
		<div class="navigation_next">
		<button class="btn btn-sm">Далее</button>
		</div>
		</div>
		</div>`
    }

    static slideThree() {
        return `
		<div class="payment_slide payment_slide-three">
		<div>
		<div class="payment_title">
		<div class='d-flex'>Тарифный план: <div class='payment_choosed-tarif-s3 ml-1 text-uppercase'>START</div></div>
		<span>Шаг 3 из 3</span>
		</div>
		<hr>
		<div class="payment_period-module">
		<div class="period-module_title">
		<div>Период платежей</div>
		<div>Цена месяца</div>
		</div>
		<div class="period-module_item">
		<div class="period-module_check">
		<div class="custom-control custom-radio">
		<input type="radio" id="modulePeriod1" name="modulePeriod" class="custom-control-input">
		<label class="custom-control-label" for="modulePeriod1">1 мес</label>
		</div>
		</div>
		<div class="period-module_sale"></div>
		<div class="period-module_price">1 000 ₽</div>
		</div>
		<div class="period-module_item">
		<div class="period-module_check">
		<div class="custom-control custom-radio">
		<input type="radio" id="modulePeriod2" name="modulePeriod" class="custom-control-input" checked>
		<label class="custom-control-label" for="modulePeriod2">3 мес</label>
		</div>
		</div>
		<div class="period-module_sale">10% скидка</div>
		<div class="period-module_price">3 000 ₽</div>
		</div>
		<div class="period-module_item">
		<div class="period-module_check">
		<div class="custom-control custom-radio">
		<input type="radio" id="modulePeriod3" name="modulePeriod" class="custom-control-input">
		<label class="custom-control-label" for="modulePeriod3">6 мес</label>
		</div>
		</div>
		<div class="period-module_sale">15% скидка</div>
		<div class="period-module_price">5 000 ₽</div>
		</div>
		<div class="period-module_item">
		<div class="period-module_check">
		<div class="custom-control custom-radio">
		<input type="radio" id="modulePeriod4" name="modulePeriod" class="custom-control-input">
		<label class="custom-control-label" for="modulePeriod4">12 мес</label>
		</div>
		</div>
		<div class="period-module_sale">30% скидка</div>
		<div class="period-module_price">15 000 ₽</div>
		</div>
		</div>
		<hr>
		<div class="payment_promocode">
		<div class="promocode_input">
		<input type="text" placeholder="Промокод">
		</div>
		<div class="promocode_button">
		<button class="btn btn-sm">Проверить</button>
		</div>
		</div>
		<div class="payment_itog-summa">
		<div class="itog-summa_title">К оплате:</div>
		<div class="itog-summa_numbers">
		<div class="itog-summa_finish"><span>4800</span> ₽</div>
		<div class="itog-summa_before"><span>6500</span> ₽</div>
		</div>
		<div class="itog-summa_saving">Вы экономите <span>1700</span> ₽</div>
		</div>
		<div class="payment_payment-btn">
		<div class="payment-btn_bank-card">
		<button class="btn btn-sm">Оплатить банковской картой</button>
		</div>
		<div class="payment-btn_other-way">
		<a href="#" target="blank">Другой способ оплаты</a>
		</div>
		</div>
		</div>
		<div class="payment_navigation">
		<div class="navigation_back">
		<button class="btn btn-sm">
		<i class="fas fa-long-arrow-alt-left"></i>
		</button>
		</div>
		</div>
		</div>`
    }
}