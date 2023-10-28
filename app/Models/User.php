<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    /**
     * Get the LastActiveUserSubscription associated with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    
     public function LastActiveUserSubscription(): HasOne
    {
        return $this->hasOne(UserSubscription::class)
            ->where('payment_status', 'paid')
            ->latest();
    }

    public function getIsActiveAttribute(): bool
    {
        // Cek apakah ada berlangganan aktif
        if (!$this->LastActiveUserSubscription) {
            return false;
        }

        $expiredDate = Carbon::create($this->LastActiveUserSubscription->expired_date);

        // Cek apakah berlangganan masih aktif berdasarkan tanggal kedaluwarsa
        return now()->lte($expiredDate);
    }

}
