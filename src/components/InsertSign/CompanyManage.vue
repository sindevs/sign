<template>
  <div>
    <CRow>
      <CCol sm="4">
        <CSelect
          label="ສະຖານທີ່ຕິດຕັ້ງປ້າຍ"
          :options="sign_type"
          @change="placeSign"
        />
      </CCol>
      <CCol sm="4">
        <CSelect
          label="ປະເພດວັດສະດູ"
          :options="sign_type"
          @change="signMaterial"
        />
      </CCol>
      <CCol>
        <CInput
          label="ຂະໜາດກວ້າງ (cm)"
          placeholder="ປ້ອນຂະໜາດກວ້າງ..."
          type="number"
          v-model="inputWidth"
          :is-valid="validator"
        />
      </CCol>
      <CCol>
        <CInput
          label="ຂະໜາດສູງ (cm)"
          type="number"
          placeholder="ປ້ອນຂະໜາດສູງ..."
          v-model="inputHeight"
          required
        />
      </CCol>
    </CRow>
    <CRow>
      <CCol>
        <CInput
          label="ຜະລິດຕະພັນ"
          placeholder="ກະລູນາປ້ອນຜະລິດຕະພັນ..."
          v-model="inputSignType"
          required
        />
      </CCol>
      <CCol>
        <CInput
          label="ວັນທີໝົດອາຍຸໂປຣໂມຊັນ"
          type="date"
          v-model="inputTermPro"
          required
        />
      </CCol>
      <CCol>
        <CInput
          label="ລາຄາ/ມູນຄ່າປ້າຍ"
          placeholder="ກະລູນາປ້ອນມູນຄ່າປ້າຍ..."
          v-model="inputSignPrice"
          required
        />
      </CCol>
    </CRow>
    <CRow>
      <CCol col="4">
        <CInput
          label="ບໍລິສັດທີ່ຕິດຕັ້ງປ້າຍ"
          placeholder="ກະລູນາປ້ອນບໍລິສັດຕິດຕັ້ງປ້າຍ..."
          v-model="inputCMange"
          required
        />
      </CCol>
      <CCol col="4">
        <CInput
          label="ໄລຍະເວລາສັນຍາ (ເດືອນ)"
          type="number"
          placeholder="ກະລູນາປ້ອນອາຍຸສັນຍາ"
          v-model="inputTermSign"
          required
        />
      </CCol>
      <CCol>
        <CInput
          label="ເລີ່ມສັນຍາ"
          required
          type="date"
          v-model="inputStartDate"
        />
      </CCol>
      <CCol>
        <CInput
          label="ສິ້ນສຸດສັນຍາ"
          required
          type="date"
          v-model="inputEndDate"
        />
      </CCol>
    </CRow>
    <CRow class="pt-2 pb-3">
      <CCol>
        <CButton type="reset" size="md" color="danger" @click="ClearForm"
          ><CIcon name="cil-ban" /> ເລີ່ມໃໝ່</CButton
        >
        &nbsp; &nbsp;
        <CButton class="ml-2" size="md" color="info" @click="onSaveClicked"
          ><CIcon name="cilSave" /> ບັນທຶກຂໍ້ມູນ
        </CButton>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectPlaceSign: null,
      selectMaterialSign: null,
      inputWidth: "",
      inputHeight: "",
      inputSignType: "",
      inputTermPro: "",
      inputSignPrice: "",
      inputCMange: "",
      inputTermSign: "",
      inputStartDate: "",
      inputEndDate: "",
      in: {
        data: null,
      },
      sign_type: [
        {
          value: "0",
          texxt: "ກະລູນາເລືອກປະເພດປ້າຍ...",
        },
        {
          value: "1",
          label: "ປ້າຍທີ່ມີສັນຍາໃຫ້ເຊົ່າ",
        },
        {
          value: "2",
          label: "ປ້າຍທີ່ຄຸ້ມຄອງເອງ",
        },
      ],
      sign_type1: [
        {
          value: "0",
          label: "ກະລູນາເລືອກປະເພດປ້າຍ...",
        },
        {
          value: "1",
          label: "ປ້າຍທີ່ມີສັນຍາໃຫ້ເຊົ່າ",
        },
        {
          value: "2",
          label: "ປ້າຍທີ່ຄຸ້ມຄອງເອງ",
        },
      ],
    };
  },
  methods: {
    ClearForm() {
      this.selectPlaceSign = null;
      this.selectMaterialSign = null;
      this.inputWidth = "";
      this.inputHeight = "";
      this.inputSignType = "";
      this.inputTermPro = "";
      this.inputSignPrice = "";
      this.inputCMange = "";
      this.inputTermSign = "";
      this.inputStartDate = "";
      this.inputEndDate = "";
    },
    onSaveClicked() {
      let v = {
        selectPlaceSign: this.selectPlaceSign,
        selectMaterialSign: this.selectMaterialSign,
        inputWidth: this.inputWidth,
        inputHeight: this.inputHeight,
        inputSignType: this.inputSignType,
        inputTermPro: this.inputTermPro,
        inputSignPrice: this.inputSignPrice,
        inputCMange: this.inputCMange,
        inputTermSign: this.inputTermSign,
        inputStartDate: this.inputStartDate,
        inputEndDate: this.inputEndDate,
      };
      console.log("data", v);
      this.$swal.fire({
        text: "ກະລຸນາ ກວດຄືນ ຂໍ້ມູນ",
        type: "error",
        icon: "warning",
      });
      return;
    },
    signMaterial(e) {
      this.selectMaterialSign = e.target.value;
    },
    placeSign(e) {
      this.selectPlaceSign = e.target.value;
    },
    validator(val) {
      return val ? val.length >= 10 : false;
    },
  },
};
</script>

<style>
</style>