<template>
  <div class="container">
    <div class="row p-1">
      <div class="col-4 p-1" v-for="h in houses" :key="h.id">
        <House :house="h" />
      </div>
    </div>
    <div class="container-fluid">
      <b
        title="List a House"
        class="
          create-btn
          btn btn-success
          rounded-pill
          shadow
          d-flex
          align-items-center
          justify-content-center
        "
        data-bs-toggle="modal"
        data-bs-target="#form-modal"
      >
        <i class="mdi mdi-plus"></i>
      </b>
      <div class="row mt-1">
        <div v-for="c in cars" :key="c.id" class="col-4 p-4 mb-2">
          <Car :car="c" />
        </div>
      </div>
      <Modal>
        <template #modal-title>List a House</template>
        <template #modal-body><HouseForm /></template>
      </Modal>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { logger } from "../utils/Logger";
import { housesService } from "../services/HousesService";
import { AppState } from "../AppState";
export default {
  setup() {
    onMounted(async () => {
      try {
        await housesService.getAll();
      } catch (error) {
        logger.log(error);
      }
    });
    return {
      houses: computed(() => AppState.houses),
    };
  },
};
</script>

<style>
.create-btn {
  font-size: 20px;
  height: 60px;
  width: 60px;
  z-index: 100;
  position: fixed;
  bottom: 10vh;
  right: 5vh;
}
</style>
