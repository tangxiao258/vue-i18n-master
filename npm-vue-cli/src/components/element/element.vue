<template>
  <div class="element">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item :label="$t('form.activity_name')">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item :label="$t('form.activity_region.title')">
        <el-select v-model="form.region" :placeholder="$t('form.activity_region.placeholder')">
          <el-option :label="$t('form.activity_region.children[0]')" :value="$t('form.activity_region.children[0]')"></el-option>
          <el-option :label="$t('form.activity_region.children[1]')" :value="$t('form.activity_region.children[1]')"></el-option>
          <el-option :label="$t('form.activity_region.children[2]')" :value="$t('form.activity_region.children[2]')"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('form.activity_date.title')">
        <el-col :span="11">
          <el-date-picker type="date" :placeholder="$t('form.activity_date.placeholder[0]')" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" :placeholder="$t('form.activity_date.placeholder[1]')" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item :label="$t('form.instant_delivery')">
        <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item :label="$t('form.activity_kind.title')">
        <el-checkbox-group v-model="form.type">
          <el-checkbox :label="$t('form.activity_kind.children[0]')" name="type"></el-checkbox>
          <el-checkbox :label="$t('form.activity_kind.children[1]')" name="type"></el-checkbox>
          <el-checkbox :label="$t('form.activity_kind.children[2]')" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item :label="$t('form.activity_form')">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">{{$t('button.confirm')}}</el-button>
        <el-button>{{$t('button.cancel')}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import ZHCN from '../../lang/element/element_zh';
  import EN from '../../lang/element/element_en';
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    i18n: {
      messages: {
        en: EN,
        zh: ZHCN
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .element
    position:relative
    padding:20px 40px
</style>
