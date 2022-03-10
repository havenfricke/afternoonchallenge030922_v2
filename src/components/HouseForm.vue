<template>
  <form>
    <div class="row">
      <div class="form-group col-6">
        Listing Price
        <input required v-model="house.price" type="number" />
      </div>
      <div class="form-group col-6">
        Year of House
        <input required v-model="house.year" type="text" />
      </div>
      <div class="form-group col-6">
        Bathrooms
        <input required v-model="house.bathrooms" type="number" />
      </div>
      <div class="form-group col-6">
        Bedrooms
        <input required v-model="house.bedrooms" type="number" />
      </div>
      <div class="form-group col-6">
        Levels
        <input required v-model="house.levels" type="number" />
      </div>
      <div class="form-group col-12 d-flex flex-column h-100">
        Description
        <input required v-model="house.description" type="text" />
      </div>
      <div class="form-group col-12 d-flex flex-column h-100">
        Image Url
        <input required v-model="house.imgUrl" type="text" />
      </div>
    </div>

    <div class="d-flex justify-content-between my-3">
      <button
        type="button"
        data-bs-dismiss="modal"
        aria-label="Close"
        class="btn text-dark lighten-20 text-uppercase selectable"
      >
        cancel
      </button>
      <button
        @click="listHouse"
        type="button"
        class="btn btn-success text-dark text-uppercase selectable"
      >
        List House
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import { housesService } from "../services/HousesService";
import { logger } from "../utils/Logger";
export default {
  setup() {
    const house = ref({});
    return {
      house,
      async listHouse() {
        try {
          logger.log(house.value);
          await housesService.listHouse(house.value);
          house.value = {};
        } catch (error) {
          logger.log(error);
        }
      },
    };
  },
};
</script>

<style>
</style>