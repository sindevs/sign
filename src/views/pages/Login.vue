<template>
  <div class="c-app flex-row align-items-center" alt="Responsive image">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody class="text-center">
                <CForm>
                  <img
                    src="@/assets/images/LVBB1.png"
                    class="img-fluid"
                    alt="Responsive image"
                  />

                  <h4 class="text-muted pb-2 pt-2 pb">
                    ລະບົບການບໍລິຫານຈັດການປ້າຍ
                  </h4>
                  <CInput placeholder="ຊື່ຜູ້ໃຊ້" autocomplete="username email">
                    <template #prepend-content
                      ><CIcon name="cil-user"
                    /></template>
                  </CInput>
                  <CInput
                    placeholder="ລະຫັດຜ່ານ"
                    type="password"
                    autocomplete="curent-password"
                  >
                    <template #prepend-content
                      ><CIcon name="cil-lock-locked"
                    /></template>
                  </CInput>
                  <CRow>
                    <CCol class="text-right">
                      <CButton color="info" class="px-4">
                        <CIcon name="cilArrowRight"></CIcon>
                        ເຂົ້າສູ່ລະບົບ
                      </CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>
<style lang="scss" scoped>
.c-app {
  background-image: url("../../assets/images/bg.jpg");
  background-size: cover;
}
</style>
