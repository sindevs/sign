<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img src="img/avatars/6.jpg" class="c-avatar-img" />
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>ການຕັ້ງຄ່າ</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <CIcon name="cil-bell" /> ການແຈ້ງເຕືອນ
      <CBadge color="info" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem> <CIcon name="cil-user" /> ໂປຣຟາຍ </CDropdownItem>
    <CDropdownItem> <CIcon name="cil-settings" /> ການຕັ້ງຄ່າ </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-lock-locked" /> ອອກຈາກລະບົບ
    </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: "TheHeaderDropdownAccnt",
  data() {
    return {
      itemsCount: 42,
    };
  },
};
</script>

<style scoped>
.c-icon {
  margin-right: 0.3rem;
}
</style>