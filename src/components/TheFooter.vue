<script setup></script>
<template>
  <div class="">
    <div class="grid pt-3 md:pb-3 md:px-5" id="the-footer">
      <div
        class="col-12 md:col-4 col-offset-0 md:col-offset-2 mt-3 mr-5 pl-5 md:pl-0"
      >
        <div class="flex-row align-items-center">
          <h3 class="mb-2">Si tienes alguna duda o consulta escríbenos !</h3>

          <a href="mailto:contacto@convencionanmm.cl">
            <div class="flex align-items-center">
              <i class="pi pi-envelope mr-3"></i>
              <h4 class="text-sub">contacto@convencionanmm.cl</h4>
            </div>
          </a>
          <a href="tel:+56226388984">
            <div class="flex align-items-center">
              <i class="pi pi-phone mr-3"></i>
              <h4 class="text-sub">+56 22 638 8984</h4>
            </div>
          </a>
        </div>
      </div>
      <div class="col-12 md:col-4 md:col-offset-1 md:mt-5 mt-2">
        <div class="text-center">
          <img
            src="./../assets/img/logo-1.png"
            alt="logo-anmm"
            height="90rem"
          />
        </div>
      </div>
    </div>
    <div class="my-0" id="derechos">
      <div class="col-12 my-0 flex align-items-center justify-content-center">
        <div>2022 © todos los derechos reservados</div>
      </div>
    </div>
  </div>
</template>

<style>
#the-footer {
  background-color: var(--azul-marino);
  margin: 0;
  padding: 0;
  color: white;
}
.text-sub {
  font-weight: 400;
  margin: 0.5rem 0rem;
}
a {
  color: white;
  text-decoration: none;
}
#derechos {
  color: rgba(255, 255, 255, 0.5);
  background-color: var(--azul-oscuro);

  /* width: 100vw;
  height: 2vh; */
}
</style>
