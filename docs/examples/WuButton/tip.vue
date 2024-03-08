<template>
  <wu-layout-page class="wu_button_demo">
    <wu-layout-page-item>
      <wu-button text style="font-size: 28px" tip="编辑" icon="Edit" />
      <wu-button text tip="删除" icon="Delete" />
      <wu-button link tip="primary" icon="Search" />
      <wu-button text tip="primary" icon="Search" />
      <wu-button text type="primary" tip="primary" icon="Edit" />
      <wu-button text type="success" tip="success" icon="Check" />
      <wu-button text type="info" tip="info" icon="Message" />
      <wu-button text type="warning" tip="warning" icon="Star" />
      <wu-button
        text
        type="danger"
        tip="danger"
        icon="Delete"
        :tipProps="{
          effect: 'light',
          placement: 'bottom',
        }"
      />
    </wu-layout-page-item>
  </wu-layout-page>
</template>