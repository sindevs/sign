<template>
  <div>
    <CRow>
      <CCol sm="4">
        <CSelect
          label="ສະຖານທີ່ຕິດຕັ້ງປ້າຍ"
          :options="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
        />
      </CCol>
      <CCol sm="4">
        <CSelect
          label="ປະເພດວັດສະດູ"
          :options="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
        />
      </CCol>
      <CCol>
        <CInput
          label="ຂະໜາດກວ້າງ (cm)"
          v-model="inputWidth"
          placeholder="ປ້ອນຂະໜາດກວ້າງ..."
        />
      </CCol>
      <CCol>
        <CInput label="ຂະໜາດຍາວ (cm)" placeholder="ປ້ອນຂະໜາດຍາວ..." />
      </CCol>
    </CRow>
    <CRow>
      <CCol>
        <CInput label="ຜະລິດຕະພັນ" placeholder="123" />
      </CCol>
      <CCol>
        <CInput label="ວັນທີໝົດອາຍຸໂປຣໂມຊັນ" type="date" placeholder="123" />
      </CCol>
      <CCol>
        <CInput label="ລາຄາ/ມູນຄ່າປ້າຍ" placeholder="ກະລູນາປ້ອນມູນຄ່າປ້າຍ..." />
      </CCol>
    </CRow>
    <CRow>
      <CCol>
        <CButton type="reset" size="md" color="danger"
          ><CIcon name="cil-ban" /> ເລີ່ມໃໝ່</CButton
        >

        <CButton class="ml-2" size="md" color="info"
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
      inputWidth: "",
    };
  },
};
</script>

<style>
</style>