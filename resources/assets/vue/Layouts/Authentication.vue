<template>
  <section class="min-h-screen flex flex-col justify-center items-center text-base-content bg-base-100">
    <slot />
      <section class="min-h-screen flex flex-col justify-center items-center text-base-content bg-base-100">
          <transition
              enter-active-class="animated fadeInLeft"
              leave-active-class="animated fadeOutRight"
              mode="out-in"
          >
              <Auth />
          </transition>
      </section>
  </section>
</template>
