<template>
  <div>
    <CRow>
      <CCol>
        <CInput
          label="ຊື່ ແລະ ນາມສະກຸນ"
          placeholder="ປ້ອນຊື່ ແລະ ນາມສະກູນ..."
          required
        />
      </CCol>
      <CCol>
        <CInput label="ສາຂາ" type="date" required />
      </CCol>
      <CCol>
        <CInput
          label="ລາຄາ/ມູນຄ່າປ້າຍ"
          placeholder="ກະລູນາປ້ອນມູນຄ່າປ້າຍ..."
          required
        />
      </CCol>
      <CCol>
        <CInput
          label="ລາຄາ/ມູນຄ່າປ້າຍ"
          placeholder="ກະລູນາປ້ອນມູນຄ່າປ້າຍ..."
          required
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
          ><CIcon name="cilSave" /> ເພີ່ມຜູ້ໃຊ້ລະບົບ
        </CButton>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    ClearForm() {
      console.log("mfl");
    },
    onSaveClicked() {
      this.$swal
        .fire({
          title: "ແຈ້ງເຕືອນ",
          text: "ກະລູນາຍືນຍັນການເພີ່ມຜູ້ໃຊ້ເຂົ້າໃນລະບົບ​",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          cancelButtonText: "ຍົກເລີກ",
          confirmButtonText: "ຍືນຍືນ",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$swal.fire(
              "ສຳເລັດ",
              "ເພີ່ມຜຸ້ໃຊ້ເຂົ້າໃນລະບົບສຳເລັດແລ້ວ.",
              "success"
            );
          }
        });
    },
  },
};
</script>

<style>
</style>