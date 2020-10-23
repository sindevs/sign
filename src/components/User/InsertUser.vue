<template>
  <div>
    <CRow>
      <CCol md="12">
        <CCard>
          <CCardHeader class="pb-1 pt-3"
            ><h5><strong>+ ເພີ່ມຜູ້ໃຊ້ພາຍໃນລະບົບ</strong></h5>
          </CCardHeader>
          <CCardBody class="pt-2">
            <CRow>
              <CCol sm="6">
                <CSelect
                  label="ເລືອກປະເພດຜູ້ໃຊ້"
                  class="font-size:11px"
                  :options="sign_type"
                  @change="SelectSignType"
                />
              </CCol>
            </CRow>
            <template v-if="SelectOption.id == 1"
              ><InsertAdmin></InsertAdmin>
            </template>
            <template v-else-if="SelectOption.id == 2"
              ><Insertmaker></Insertmaker>
            </template>
          </CCardBody>
          <!-- <CCardFooter class="pt-3 pb-3">
            <CButton
              type="reset"
              size="sm"
              color="danger"
              @click="Reset"
              :disabled="SelectOption.id == 0"
              ><CIcon name="cil-ban" /> ເລີ່ມໃໝ່</CButton
            >
            &nbsp; &nbsp;
            <CButton
              v-if="SelectOption.id == 1"
              type="submit"
              size="sm"
              color="info"
              :disabled="SelectOption.id == 2 || SelectOption.id == 0"
              @click="sweetAlertDisplay"
              ><CIcon name="cilSave" /> ບັນທຶກຂໍ້ມູນ
            </CButton>
            <CButton
              v-if="SelectOption.id == 2"
              type="submit"
              size="sm"
              color="info"
              :disabled="SelectOption.id == 1 || SelectOption.id == 0"
              @click="sweetAlertDisplay"
              ><CIcon name="cilSave" /> ບັນທຶກຂໍ້ມູນ
            </CButton>
          </CCardFooter> -->
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import InsertAdmin from "./InsertAdmin";
import Insertmaker from "./Insertmaker";
export default {
  data() {
    return {
      sign_type: [
        {
          value: "0",
          label: "ເລືອກປະເພດຜູ້ໃຊ້ລະບົບ...",
        },
        {
          value: "1",
          label: "ຜູ້ໃຊ້ລະບົບທຳມະດາ",
        },
        {
          value: "2",
          label: "ຜູ້ຄວບຄູມລະບົບ",
        },
      ],
      SelectOption: {
        id: 0,
      },
    };
  },
  components: {
    InsertAdmin,
    Insertmaker,
  },
  methods: {
    SelectSignType(e) {
      this.SelectOption.id = e.target.value;
    },
    sweetAlertDisplay() {
      this.$swal
        .fire({
          title: "ທ່ານແນ່ໃຈຫຼືບໍ່ທີ່ຈະບັນທຶກລາຍການນີ້?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          }
        });
    },
    Reset() {
      this.$swal.fire({
        icon: "error",
        text: "ບໍ່ສາມາດ ເຊື່ອມຕໍ່ກັບລະບົບໄດ້",
      });
    },
  },
};
</script>

<style>
</style>