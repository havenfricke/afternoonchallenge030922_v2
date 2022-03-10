<template>
  <div class="bg-light selectable shadow">
    <img
      style="background-size: cover"
      class="img-fluid rounded-top"
      :src="house.imgUrl"
      alt=""
    />
    <div class="p-3 rounded-bottom">
      <h3 class="text-center p-2 border-bottom border-dark">
        ${{ house.price }}
      </h3>
      <h4 class="text-center p-2 border-bottom border-dark">
        Built in {{ house.year }}
      </h4>
      <h6 class="text-center">Bathrooms: {{ house.bathrooms }}</h6>
      <h6 class="text-center">Bedrooms: {{ house.bedrooms }}</h6>

      <h4 class="text-center">{{ house.levels + " levels" }}</h4>
      <p style="height: 15vh; width: auto; overflow: auto">
        {{ house.description }}
      </p>
    </div>
    <div class="p-2">
      <button
        @click="editHouse"
        type="button"
        class="btn btn-secondary text-light text-uppercase selectable"
      >
        Edit House
      </button>
    </div>
  </div>
</template>

<script>
import { housesService } from "../services/HousesService";
export default {
  props: {
    house: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
  async editHouse() {
    try {
      await housesService.houses(house.value);
    } catch (error) {
      logger.log(error);
    }
  },
};
</script>

<style>
</style>